const searchByAttributes = function(
    search = null,
    excludedAttributes = ['_id', 'createdAt', 'updatedAt', '__v']
) {
    const attributes = Object.keys(this.schema.paths)
                            .filter(attribute => !excludedAttributes.includes(attribute));

    let query = {};
  
    if (Boolean(search)) {
      query = {
        $or: attributes.map((attribute) => ({
          [attribute]: { $regex: search, $options: "i" }
        }))
      };
    }
  
    return this.find(query);
}
  
module.exports = searchByAttributes;
