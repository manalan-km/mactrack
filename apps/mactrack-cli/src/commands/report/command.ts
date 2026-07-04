import { buildCommand, numberParser } from "@stricli/core";

export const reportCommand = buildCommand({
  loader: () => import("./impl"),
  parameters: {
    positional: {
      kind: "tuple",
      parameters: [
        {
          brief: "Report Mode: today,week,month",
          parse: String,
          default: "today",
        },
      ],
    },
  },
  docs: {
    brief:
      "Command to get a report based period of time. Currently supports 'today'. Week and month WIP",
  },
});
