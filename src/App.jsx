import React, { useState, useEffect } from "react";
import { db, storage, auth } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function App() {
  const [prompts, setPrompts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [newPrompt, setNewPrompt] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [newCategory, setNewCategory] = useState("Other");
  const [newPlatform, setNewPlatform] = useState("Midjourney");

  const [filterCategory, setFilterCategory] = useState("All");
  const [filterPlatform, setFilterPlatform] = useState("All");

  const [previewImage, setPreviewImage] = useState(null);

  // ✅ Edit States
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editPlatform, setEditPlatform] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [editImageUrl, setEditImageUrl] = useState(null);

  // ✅ Auth States
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const promptsCollection = collection(db, "prompts");

  // ✅ Watch Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Fetch all prompts from Firestore on load
  useEffect(() => {
    const fetchPrompts = async () => {
      const q = query(promptsCollection, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const fetchedPrompts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPrompts(fetchedPrompts);
      setIsLoaded(true);
    };
    fetchPrompts();
  }, []);

  // ✅ Upload image to Firebase Storage & return URL
  const uploadImageToFirebase = async (file) => {
    const storageRef = ref(
      storage,
      `prompt-images/${Date.now()}-${file.name}`
    );
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  // ✅ Add new prompt (only for logged-in users)
  const handleAddPrompt = async () => {
    if (!newPrompt.trim()) return;

    let imageUrl = null;
    if (newImage) {
      imageUrl = await uploadImageToFirebase(newImage);
    }

    const newEntry = {
      text: newPrompt,
      category: newCategory,
      platform: newPlatform,
      imageUrl: imageUrl,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(promptsCollection, newEntry);

    // Update UI immediately
    setPrompts((prev) => [
      { id: docRef.id, ...newEntry, createdAt: new Date() },
      ...prev,
    ]);

    // Reset form
    setNewPrompt("");
    setNewImage(null);
    setNewCategory("Other");
    setNewPlatform("Midjourney");
  };

  // ✅ Start editing a prompt
  const handleStartEdit = (prompt) => {
    setEditingId(prompt.id);
    setEditText(prompt.text);
    setEditCategory(prompt.category);
    setEditPlatform(prompt.platform);
    setEditImageUrl(prompt.imageUrl || null);
    setEditImage(null);
  };

  // ✅ Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
    setEditCategory("");
    setEditPlatform("");
    setEditImage(null);
    setEditImageUrl(null);
  };

  // ✅ Save edited prompt
  const handleSaveEdit = async () => {
    if (!editText.trim()) return;

    let imageUrl = editImageUrl;

    // If a new image was selected, upload it
    if (editImage) {
      imageUrl = await uploadImageToFirebase(editImage);
    }

    const updatedData = {
      text: editText,
      category: editCategory,
      platform: editPlatform,
      imageUrl: imageUrl,
    };

    // Update in Firebase
    const promptRef = doc(db, "prompts", editingId);
    await updateDoc(promptRef, updatedData);

    // Update local state
    setPrompts((prev) =>
      prev.map((p) =>
        p.id === editingId ? { ...p, ...updatedData } : p
      )
    );

    // Reset edit state
    handleCancelEdit();
  };

  // ✅ Remove image during edit
  const handleRemoveImage = () => {
    setEditImageUrl(null);
    setEditImage(null);
  };

  // ✅ Copy prompt to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copied to clipboard!");
  };

  // ✅ Reset filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setFilterCategory("All");
    setFilterPlatform("All");
  };

  // ✅ Login & Logout
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("❌ Login failed: " + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // ✅ Filter logic
  const filteredPrompts = prompts.filter((p) => {
    const matchesSearch = p.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || p.category === filterCategory;
    const matchesPlatform =
      filterPlatform === "All" || p.platform === filterPlatform;
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  const categoryOptions = [
    "Scenery",
    "Emote",
    "Character",
    "Seasonal",
    "Marketing",
    "Wedding",
    "Horror",
    "Food",
    "Nursery",
    "Other",
  ];

  const platformOptions = ["ChatGPT", "Midjourney", "Bing", "Gemini", "Grok"];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 relative">
      <h1 className="text-3xl font-bold mb-4">MidJourney Prompt Library</h1>
      <p className="text-gray-300 mb-4">
        Add your prompt & search instantly (Firebase Connected)
      </p>

      {/* ✅ Authentication Controls */}
      <div className="mb-6 w-full max-w-md bg-gray-800 p-4 rounded-lg text-center">
        {user ? (
          <>
            <p className="mb-2">
              ✅ Logged in as <strong>{user.email}</strong>
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-400 mb-2">
              🔒 Only registered users can add prompts
            </p>
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-2 rounded bg-white text-black w-full mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="px-2 py-2 rounded bg-white text-black w-full mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white w-full"
            >
              Login
            </button>
          </>
        )}
      </div>

      {/* 🔎 Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl mb-4">
        <input
          type="text"
          placeholder="Search for prompts..."
          className="flex-1 p-3 rounded-lg text-black bg-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          className="p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
          value={filterPlatform}
          onChange={(e) => setFilterPlatform(e.target.value)}
        >
          <option value="All">All Platforms</option>
          {platformOptions.map((plat) => (
            <option key={plat} value={plat}>
              {plat}
            </option>
          ))}
        </select>

        {/* ✅ Reset Filters Button */}
        <button
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
          onClick={handleResetFilters}
        >
          🔄 Reset Filters
        </button>
      </div>

      {/* ✅ Add Prompt Section (Only visible if logged in) */}
      {user ? (
        <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg mb-6">
          <textarea
            placeholder="Enter your prompt here..."
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400"
            rows={3}
            value={newPrompt}
            onChange={(e) => setNewPrompt(e.target.value)}
          />

          {/* Category & Platform Dropdowns */}
          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <select
              className="flex-1 p-2 rounded bg-gray-700 text-white"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            >
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              className="flex-1 p-2 rounded bg-gray-700 text-white"
              value={newPlatform}
              onChange={(e) => setNewPlatform(e.target.value)}
            >
              {platformOptions.map((plat) => (
                <option key={plat} value={plat}>
                  {plat}
                </option>
              ))}
            </select>
          </div>

          {/* File upload */}
          <label className="block mt-3">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition">
              📂 Choose an image
            </span>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
            {newImage && (
              <span className="ml-2 text-sm text-gray-300">
                {newImage.name}
              </span>
            )}
          </label>

          {/* Add Prompt Button */}
          <button
            className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded font-semibold transition"
            onClick={handleAddPrompt}
          >
            ➕ Add Prompt
          </button>
        </div>
      ) : (
        <p className="text-gray-400 text-center mb-6">
          🔒 Please log in to add prompts
        </p>
      )}

      {/* Prompt Results */}
      <h2 className="text-2xl font-semibold mb-4">Prompts</h2>

      {!isLoaded ? (
        <p className="text-gray-400">Loading saved prompts...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg relative"
            >
              {editingId === prompt.id ? (
                // ✅ Edit Mode
                <div className="space-y-3">
                  {/* Image Section */}
                  {editImageUrl && !editImage && (
                    <div className="relative">
                      <img
                        src={editImageUrl}
                        alt="Current"
                        className="w-full h-40 object-cover rounded"
                      />
                      <button
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
                        onClick={handleRemoveImage}
                      >
                        ✖ Remove
                      </button>
                    </div>
                  )}

                  {/* Add/Change Image */}
                  <label className="block">
                    <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded cursor-pointer transition">
                      {editImageUrl ? "📷 Change Image" : "📂 Add Image"}
                    </span>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      className="hidden"
                      onChange={(e) => {
                        setEditImage(e.target.files[0]);
                        setEditImageUrl(null);
                      }}
                    />
                    {editImage && (
                      <span className="ml-2 text-xs text-gray-300">
                        {editImage.name}
                      </span>
                    )}
                  </label>

                  {/* Text */}
                  <textarea
                    className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                    rows={3}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />

                  {/* Category & Platform */}
                  <div className="flex gap-2">
                    <select
                      className="flex-1 p-2 rounded bg-gray-700 text-white text-xs"
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                    >
                      {categoryOptions.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <select
                      className="flex-1 p-2 rounded bg-gray-700 text-white text-xs"
                      value={editPlatform}
                      onChange={(e) => setEditPlatform(e.target.value)}
                    >
                      {platformOptions.map((plat) => (
                        <option key={plat} value={plat}>
                          {plat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-2 rounded transition"
                      onClick={handleSaveEdit}
                    >
                      ✓ Save
                    </button>
                    <button
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-xs px-3 py-2 rounded transition"
                      onClick={handleCancelEdit}
                    >
                      ✖ Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // ✅ View Mode
                <>
                  {prompt.imageUrl && (
                    <div className="relative cursor-pointer">
                      <img
                        src={prompt.imageUrl}
                        alt="Prompt preview"
                        className="w-full h-40 object-cover rounded mb-2 transition-transform duration-300 hover:opacity-80"
                        onClick={() => setPreviewImage(prompt.imageUrl)}
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-xs px-2 py-1 rounded">
                        🔍 Click to preview
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-gray-200 mb-1">{prompt.text}</p>
                  <div className="text-xs text-gray-400 mb-8">
                    <span className="mr-2">📂 {prompt.category}</span>
                    <span>💻 {prompt.platform}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    {user && (
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded transition"
                        onClick={() => handleStartEdit(prompt)}
                      >
                        ✏️ Edit
                      </button>
                    )}
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs px-2 py-1 rounded transition"
                      onClick={() => copyToClipboard(prompt.text)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}

          {filteredPrompts.length === 0 && (
            <p className="col-span-full text-gray-400 text-center">
              No prompts found.
            </p>
          )}
        </div>
      )}

      {/* Full Image Preview */}
      {previewImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            <img
              src={previewImage}
              alt="Full Preview"
              className="max-h-[90vh] max-w-[90vw] rounded shadow-xl"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-lg"
              onClick={() => setPreviewImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
