import { FaCheckCircle, FaStar, FaUsers, FaClock, FaCar, FaInfoCircle } from "react-icons/fa";
import React from "react";

export const iconMap: Record<string, React.ReactNode> = {
  "check-circle": <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />,
  star: <FaStar className="text-green-600 mr-3 mt-1 flex-shrink-0" />,
  group: <FaUsers className="text-green-600" size={48} />,
  "time-five": <FaClock className="text-green-600" size={48} />,
  car: <FaCar className="text-green-600" size={48} />,
  "info-circle": <FaInfoCircle className="text-green-600 mr-2" />,
};
