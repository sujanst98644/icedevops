import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [name, setName] = useState("");
  const [flavour, setFlavour] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("flavour", flavour);
    formData.append("price", price);
    formData.append("image", image);

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:8080/api/products",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Ice cream uploaded successfully");

      // reset form
      setName("");
      setFlavour("");
      setPrice("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-28">
      <div className="bg-white rounded p-10">
        <h2 className="mb-5 text-xl font-semibold">Upload Ice Cream</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Ice cream name"
            className="w-full border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            placeholder="Flavour (e.g. Vanilla)"
            className="w-full border p-2"
            value={flavour}
            onChange={(e) => setFlavour(e.target.value)}
            required
          />

          <input
            placeholder="Price"
            type="number"
            className="w-full border p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button
            disabled={loading}
            className="bg-black text-white px-4 py-2 w-full"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
