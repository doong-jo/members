import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

import { FieldController } from "./field.controller";
import { Field } from "./field.entity";

export const useSuspenseFields = (queryOptions?: UseSuspenseQueryOptions<Field[], Error>) => {
  return useSuspenseQuery<Field[], Error>({
    queryKey: ["fields"],
    queryFn: async () => FieldController.getInstance().getAllFields(),
    ...queryOptions,
  });
};
