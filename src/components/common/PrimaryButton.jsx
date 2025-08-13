import Link from "next/link";
import React from "react";

function PrimaryButton({
  label,
  onClick = () => {},
  className = "",
  href,
  type = "button", // default type
}) {
  const finalClass = `px-6 py-3 bg-[#AD544E] text-white text-xs xs:text-sm lg:text-base font-Montserrat font-medium rounded-full shadow-inner hover:bg-primary hover:scale-105 transition-all duration-300 ${className}`;

  // Agar href hai to Link return karega
  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {label}
      </Link>
    );
  }

  // Agar href nahi hai to button return karega
  return (
    <button type={type} className={finalClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;
