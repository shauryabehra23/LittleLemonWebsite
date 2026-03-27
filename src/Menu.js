import React, { useState } from "react";
import { useCart } from "./CartContext";

const MENU_DATA = [
  // Appetizers
  {
    id: 1,
    name: "Hummus & Pita",
    category: "Appetizers",
    price: "$8.99",
    description: "Creamy chickpea dip with fresh pita bread",
    image: "/images/f1.jpg",
  },
  {
    id: 2,
    name: "Stuffed Grape Leaves",
    category: "Appetizers",
    price: "$7.99",
    description: "Herb-infused rice wrapped in tender grape leaves",
    image: "/images/f1.jpg",
  },
  {
    id: 3,
    name: "Fried Calamari",
    category: "Appetizers",
    price: "$10.99",
    description: "Crispy squid rings with garlic aioli",
    image: "/images/f1.jpg",
  },

  // Main Courses
  {
    id: 4,
    name: "Margarita Pizza",
    category: "Main Courses",
    price: "$35.60",
    description:
      "A classic Italian favorite, our Margarita Pizza features a thin, crispy crust topped with rich tomato sauce, creamy mozzarella cheese, and fresh basil leaves.",
    image: "/images/f1.jpg",
  },
  {
    id: 5,
    name: "Moroccan Tagine",
    category: "Main Courses",
    price: "$55.60",
    description:
      "Our Moroccan Tagine is a slow-cooked stew brimming with tender vegetables, aromatic spices, and your choice of protein. Served in a traditional clay pot.",
    image: "/images/f2.jpeg",
  },
  {
    id: 6,
    name: "Grilled Branzino",
    category: "Main Courses",
    price: "$48.99",
    description:
      "Fresh Mediterranean sea bass grilled with lemon, herbs, and olive oil",
    image: "/images/f1.jpg",
  },
  {
    id: 7,
    name: "Lamb Kebab",
    category: "Main Courses",
    price: "$42.99",
    description:
      "Tender lamb skewers marinated in Mediterranean spices, served with rice pilaf",
    image: "/images/f1.jpg",
  },

  // Salads
  {
    id: 8,
    name: "Tabouli",
    category: "Salads",
    price: "$45.60",
    description:
      "Tabouli is a refreshing Mediterranean salad made with finely chopped parsley, ripe tomatoes, bulgur wheat, and a zesty lemon-olive oil dressing.",
    image: "/images/f3.jpg",
  },
  {
    id: 9,
    name: "Greek Salad",
    category: "Salads",
    price: "$16.99",
    description:
      "Fresh tomatoes, cucumbers, olives, feta cheese with olive oil dressing",
    image: "/images/f1.jpg",
  },
  {
    id: 10,
    name: "Fattoush",
    category: "Salads",
    price: "$18.99",
    description:
      "Mixed greens, tomatoes, radishes, cucumbers with crispy pita chips and tahini dressing",
    image: "/images/f1.jpg",
  },

  // Desserts
  {
    id: 11,
    name: "Baklava",
    category: "Desserts",
    price: "$8.99",
    description: "Crispy phyllo pastry with honey, nuts, and warm spices",
    image: "/images/f1.jpg",
  },
  {
    id: 12,
    name: "Tiramisu",
    category: "Desserts",
    price: "$7.99",
    description:
      "Classic Italian dessert with layers of mascarpone cream and espresso",
    image: "/images/f1.jpg",
  },
  {
    id: 13,
    name: "Panna Cotta",
    category: "Desserts",
    price: "$9.99",
    description: "Silky smooth custard topped with fresh berry compote",
    image: "/images/f1.jpg",
  },

  // Beverages
  {
    id: 14,
    name: "Fresh Lemonade",
    category: "Beverages",
    price: "$4.99",
    description: "Freshly squeezed lemon juice with mint and sparkling water",
    image: "/images/f1.jpg",
  },
  {
    id: 15,
    name: "Arabic Coffee",
    category: "Beverages",
    price: "$3.99",
    description: "Traditional coffee with cardamom and a hint of rose water",
    image: "/images/f1.jpg",
  },
  {
    id: 16,
    name: "Iced Tea with Pomegranate",
    category: "Beverages",
    price: "$5.99",
    description: "Refreshing iced tea with pomegranate juice and fresh mint",
    image: "/images/f1.jpg",
  },
];

function Menu() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedItem, setAddedItem] = useState(null);

  const categories = [
    "All",
    ...new Set(MENU_DATA.map((item) => item.category)),
  ];

  const filteredMenu = MENU_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="menu-page" style={{ padding: "2rem", minHeight: "100vh" }}>
      <h1
        style={{ textAlign: "center", color: "#495E57", marginBottom: "2rem" }}
      >
        Little Lemon Restaurant Menu
      </h1>

      {/* Search Bar */}
      <div
        style={{ maxWidth: "500px", margin: "0 auto 2rem", display: "flex" }}
      >
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            border: "2px solid #495E57",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>

      {/* Category Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor:
                selectedCategory === category ? "#495E57" : "#F4CE14",
              color: selectedCategory === category ? "#FFF" : "#495E57",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1.5rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                height: "200px",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px",
                marginBottom: "1rem",
                backgroundImage: `linear-gradient(135deg, #495E57 0%, #E07A5F 100%)`,
              }}
            />
            <h3 style={{ color: "#495E57", marginBottom: "0.5rem" }}>
              {item.name}
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "0.9rem",
                marginBottom: "1rem",
                minHeight: "2.5rem",
              }}
            >
              {item.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#E07A5F",
                }}
              >
                {item.price}
              </span>
              <button
                onClick={() => {
                  addToCart(item);
                  setAddedItem(item.id);
                  setTimeout(() => setAddedItem(null), 1500);
                }}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor:
                    addedItem === item.id ? "#F4CE14" : "#495E57",
                  color: addedItem === item.id ? "#495E57" : "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
              >
                {addedItem === item.id ? "✓ Added!" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMenu.length === 0 && (
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            color: "#666",
            fontSize: "1.1rem",
          }}
        >
          <p>No menu items found matching your search.</p>
        </div>
      )}
    </main>
  );
}

export default Menu;
