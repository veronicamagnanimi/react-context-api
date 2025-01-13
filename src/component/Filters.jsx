const Filters = ({tags, selectedTag, onFilterChange}) => {

    return (
        <select
        name="tag"
        id=""
        value={selectedTag}
        onChange={(event) => onFilterChange(event.target.value)}
      >
        <option value="all">All tags</option>
        {tags.map((curTag, index) => (
          <option key={index} value={curTag}>
            {curTag}
          </option>
        ))}
      </select>
    )
}

export default Filters;