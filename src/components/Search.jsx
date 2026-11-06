import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef}>
      {showSearch && (
        <input
          type="text"
          autoFocus
          className="border border-black rounded-lg px-3 py-1 outline-none"
          placeholder="Search...."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setShowSearch(false);
            }
          }}
        />
      )}
      <FontAwesomeIcon
        icon="magnifying-glass"
        className="text-2xl"
        onClick={() => setShowSearch(!showSearch)}
      />
    </div>
  );
}

export default Search;
