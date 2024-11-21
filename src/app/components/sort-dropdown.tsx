export function SortDropdown() {
    return (
      <select className="w-full max-w-xs px-3 py-2 border rounded-md">
        <option value="">Sort by</option>
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    )
  }
  
  