import React from "react";
import { useCart } from "./CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  return (
    <main
      style={{
        padding: "2rem",
        minHeight: "100vh",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "#495E57", marginBottom: "2rem" }}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            color: "#666",
          }}
        >
          <p style={{ fontSize: "1.2rem" }}>Your cart is empty</p>
          <p>
            <a
              href="/menu"
              style={{
                color: "#495E57",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Continue shopping →
            </a>
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div style={{ marginBottom: "2rem" }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.5rem",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: "#495E57", marginBottom: "0.5rem" }}>
                    {item.name}
                  </h3>
                  <p style={{ color: "#666", fontSize: "0.9rem" }}>
                    {item.category}
                  </p>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  {/* Quantity Controls */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: 0,
                        backgroundColor: "#E07A5F",
                        color: "#FFF",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        width: "40px",
                        textAlign: "center",
                        fontWeight: "600",
                        color: "#495E57",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: "30px",
                        height: "30px",
                        padding: 0,
                        backgroundColor: "#F4CE14",
                        color: "#495E57",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div style={{ width: "80px", textAlign: "right" }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#E07A5F",
                        fontSize: "1.1rem",
                      }}
                    >
                      $
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#E07A5F",
                      color: "#FFF",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div
            style={{
              backgroundColor: "#495E57",
              color: "#FFFFFF",
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "right",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span>Subtotal:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span>Tax (estimate):</span>
              <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "1.3rem",
                fontWeight: "bold",
                borderTop: "1px solid #FFF",
                paddingTop: "1rem",
              }}
            >
              <span>Total:</span>
              <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={clearCart}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#E07A5F",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Clear Cart
              </button>
              <button
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#F4CE14",
                  color: "#495E57",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
