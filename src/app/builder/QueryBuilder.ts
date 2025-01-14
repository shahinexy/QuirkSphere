import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchbleFields: string[]) {
    const search = this?.query?.search;
    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchbleFields.map(
          (field) =>
            ({
              [field]: { $regex: search, $options: "i" },
            } as FilterQuery<T>)
        ),
      });
    }

    return this;
  }

  filter() {
    const queryObject = { ...this.query };

    const excludeField = ["search", "sortBy", "sortOrder", "limit", "page"];

    excludeField.forEach((el) => delete queryObject[el]);

    if (this.query.filter) {
      queryObject.author = queryObject.filter;
      delete queryObject.filter;
    }

    this.modelQuery = this.modelQuery.find(queryObject as FilterQuery<T>);

    return this;
  }

  sort() {
    const sortBy = this?.query?.sortBy || "createdAt";

    const sortOrder = this?.query?.sortOrder === "asc" ? "" : "-";

    const sort = `${sortOrder}${sortBy}`;

    this.modelQuery = this.modelQuery.sort(sort);

    return this;
  }

  paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }
}

export default QueryBuilder;
