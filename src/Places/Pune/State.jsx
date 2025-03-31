import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stateDistrictData = {
  Rajasthan: ["jaipur"],
  Maharashtra: ["Pune"],
  Karnataka: ["Mysore"],
};

export default function State() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const navigate = useNavigate(); // React Router navigation function

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(""); // Reset district when state changes
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);

    if (district) {
      navigate(`/${district.toLowerCase()}`); // Navigate to the selected district route
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <label className="font-semibold">Select State:</label>
      <select
        className="border rounded p-2"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">-- Select State --</option>
        {Object.keys(stateDistrictData).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label className="font-semibold">Select District:</label>
      <select
        className="border rounded p-2"
        value={selectedDistrict}
        onChange={handleDistrictChange}
        disabled={!selectedState}
      >
        <option value="">-- Select District --</option>
        {selectedState &&
          stateDistrictData[selectedState].map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
      </select>

      {selectedState && selectedDistrict && (
        <p className="mt-2 text-green-600">
          Redirecting to: <strong>/{selectedDistrict.toLowerCase()}</strong>
        </p>
      )}
    </div>
  );
}
