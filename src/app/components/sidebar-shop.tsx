export function Sidebar() {
    return (
      <aside className="w-full max-w-xs p-4 border-r">
        <div className="space-y-4">
          <div>
            <label htmlFor="price" className="block mb-2 font-medium">Price</label>
            <div className="flex gap-2">
              <input type="text" id="price-min" placeholder="Min" className="w-1/2 px-3 py-2 border rounded-md" />
              <input type="text" id="price-max" placeholder="Max" className="w-1/2 px-3 py-2 border rounded-md" />
            </div>
          </div>
          <div>
            <span className="block mb-2 font-medium">Year of manufacture</span>
            <div className="space-y-2">
              {['1950-2000', '2000-2005', '2005-2015', '2015-2024'].map((year) => (
                <label key={year} className="flex items-center">
                  <input type="radio" name="year" value={year} className="mr-2" />
                  {year}
                </label>
              ))}
            </div>
          </div>
          <div>
            <span className="block mb-2 font-medium">Location</span>
            <div className="space-y-2">
              {['Africa', 'Asia', 'Europe'].map((location) => (
                <label key={location} className="flex items-center">
                  <input type="radio" name="location" value={location} className="mr-2" />
                  {location}
                </label>
              ))}
            </div>
          </div>
          <div>
            <span className="block mb-2 font-medium">Condition</span>
            <div className="space-y-2">
              {['New', 'Used'].map((condition) => (
                <label key={condition} className="flex items-center">
                  <input type="radio" name="condition" value={condition} className="mr-2" />
                  {condition}
                </label>
              ))}
            </div>
          </div>
          <div>
            <span className="block mb-2 font-medium">Brand</span>
            <div className="space-y-2">
              {['Deere', 'Mahindra', 'SDF group', 'Kubota', 'KUHN', 'CNH Global NV'].map((brand) => (
                <label key={brand} className="flex items-center">
                  <input type="radio" name="brand" value={brand} className="mr-2" />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    )
  }
  
  