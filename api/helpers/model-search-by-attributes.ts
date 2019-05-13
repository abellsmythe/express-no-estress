const searchByAttributes = (
  context: any,
  search = null,
  excludedAttributes = ['_id', 'createdAt', 'updatedAt', '__v'],
) => {
    const attributes = Object.keys(context.schema.paths)
      .filter((attribute) => !excludedAttributes.includes(attribute));

    let query = {};

    if (Boolean(search)) {
      query = {
        $or: attributes.map((attribute) => ({
          [attribute]: { $regex: search, $options: 'i' },
        })),
      };
    }

    return context.find(query);
};

export default searchByAttributes;
