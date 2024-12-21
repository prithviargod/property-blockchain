import React from "react";
import { FaPlus, FaEye, FaWallet, FaSearch, FaShieldAlt, FaChartBar, FaHeadset } from "react-icons/fa"; // Importing icons from React Icons

function Instructions() {
  const featuresRow1 = [
    {
      icon: <FaPlus />,
      title: "Add Property",
      description: "Use the Property Details tab to manage property info.",
    },
    {
      icon: <FaEye />,
      title: "View Transactions",
      description: "Access the Blockchain tab to track transactions.",
    },
    {
      icon: <FaWallet />,
      title: "Connect Wallet",
      description: "Use a crypto wallet (e.g., MetaMask) for interactions.",
    },
  ];

  const featuresRow2 = [
    {
      icon: <FaSearch />,
      title: "Search Properties",
      description: "Easily search for property records on the blockchain.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Verify Ownership",
      description: "Validate ownership and transaction history securely.",
    },
    {
      icon: <FaChartBar />,
      title: "View Analytics",
      description: "Get insights into transaction trends and property data.",
    },
    {
      icon: <FaHeadset />,
      title: "Support",
      description: "Reach out to us for guidance or technical support.",
    },
  ];

  const circleStyle = (size, background) => ({
    width: size,
    height: size,
    borderRadius: "50%",
    background,
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontSize: "14px",
  });

  const iconStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>How to Use</h2>

      <div
  style={{
    display: "flex",
    justifyContent: "center", // Centers the circles
    alignItems: "center",
    gap: "40px", // Reduces the gap between circles
    marginBottom: "20px",
  }}
>
  {featuresRow1.map((feature, index) => (
    <div
      key={index}
      style={circleStyle("200px", "linear-gradient(145deg, #3469b7, #4a90e2)")}
    >
      <div style={iconStyle}>{feature.icon}</div>
      <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold" }}>
        {feature.title}
      </h3>
      <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#fff" }}>
        {feature.description}
      </p>
    </div>
  ))}
</div>


      {/* Second Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {featuresRow2.map((feature, index) => (
          <div
            key={index}
            style={circleStyle("150px", "linear-gradient(145deg, #4a7fbf, #5ba8e7)")}
          >
            <div style={{ ...iconStyle, fontSize: "24px" }}>{feature.icon}</div>
            <h4 style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
              {feature.title}
            </h4>
            <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#fff" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructions;
