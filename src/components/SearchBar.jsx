import { Search , X } from "lucide-react";
import SugestedMovie from "./SugestedMovie";

export default function SearchBar({ searchText, setSearchText }) {
  const hasText = searchText.trim().length>0;
  return (
    <div className="glass">
      <div className="glassITem">
        <span className="search_icon rounded p-3 text-light border-0">
          <Search size={18} />
        </span>
        <input
          type="text" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Movie"
        />

        {hasText ? (
          <button className="Btn Btn-small" type="button" onClick={() => setSearchText('')}>
            <X size={16}/>
          </button>
        ) : null}
        <SugestedMovie setSearchText={setSearchText}/>
      </div>
    </div>
  );
}
