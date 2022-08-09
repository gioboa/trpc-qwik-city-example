import express from "express";
import { fileURLToPath } from "url";
import { resolve, join } from "path";
import {
  componentQrl,
  inlinedQrl,
  Host,
  Slot,
  useStore,
  useLexicalScope,
  useClientEffectQrl,
  useContext,
  jsx as jsx$1,
  SkipRerender,
  useContextProvider,
  useWatchQrl,
  noSerialize,
  createContext as createContext$1,
  useUserContext,
} from "@builder.io/qwik";
import { jsx, jsxs, Fragment } from "@builder.io/qwik/jsx-runtime";
import * as trpc$1 from "@trpc/client";
import trpcTransformer from "trpc-transformer";
import { resolveTRPCResponse } from "trpc-qwik-city";
import * as trpc$2 from "@trpc/server";
import { EventEmitter } from "events";
import { z } from "zod";
import pkg from "@prisma/client";
import fetch$1, { Headers as Headers$1, Request, Response } from "node-fetch";
import { renderToStream } from "@builder.io/qwik/server";
import { isBrowser } from "@builder.io/qwik/build";
const _layout = /* @__PURE__ */ componentQrl(
  inlinedQrl(() => {
    return /* @__PURE__ */ jsx(Host, {
      children: /* @__PURE__ */ jsx("main", {
        children: /* @__PURE__ */ jsx(Slot, {}),
      }),
    });
  }, "s_V6WDHthUIQ4")
);
const Layout_ = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: _layout,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
const url =
  typeof window === "undefined" ? "/api/trpc" : "http://localhost:3000/trpc";
const trpc = (loadFetch) =>
  trpc$1.createTRPCClient({
    url: loadFetch ? "/api/trpc" : url,
    transformer: trpcTransformer,
    ...(loadFetch && {
      fetch: loadFetch,
    }),
  });
const images = [
  "https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png",
  "https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png",
  "https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png",
  "https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png",
  "https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg",
  "https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png",
];
const percentage = ["10%", "80%", "50%", "30%"];
const index = /* @__PURE__ */ componentQrl(
  inlinedQrl(() => {
    const state = useStore({
      authors: [],
    });
    const refreshList = inlinedQrl(
      async () => {
        const [state2] = useLexicalScope();
        const authors2 = await trpc(fetch.bind(window)).query("authors:list");
        state2.authors = authors2;
      },
      "s_ZreBWQpGNgY",
      [state]
    );
    useClientEffectQrl(
      inlinedQrl(
        () => {
          const [refreshList2] = useLexicalScope();
          return refreshList2();
        },
        "s_H0uJs8zcWWM",
        [refreshList]
      )
    );
    const handleRead = inlinedQrl(
      async () => {
        const [state2] = useLexicalScope();
        const author = await trpc(fetch.bind(window)).query(
          "authors:read",
          state2.authors[0].id
        );
        console.log("authors:read --> ", author);
      },
      "s_npRMn7yvVyg",
      [state]
    );
    const handleSave = inlinedQrl(
      async () => {
        const [refreshList2] = useLexicalScope();
        await trpc(fetch.bind(window)).mutation("authors:save", {
          id: Math.random().toString(),
          firstName: "John",
          lastName: "Doe",
          country: "England",
        });
        refreshList2();
      },
      "s_Hofp2Vc8TAk",
      [refreshList]
    );
    const handleDelete = inlinedQrl(
      async () => {
        const [refreshList2] = useLexicalScope();
        await trpc(fetch.bind(window)).mutation("authors:delete", {
          firstName: "John",
          lastName: "Doe",
        });
        refreshList2();
      },
      "s_NWYdSXbw5gw",
      [refreshList]
    );
    return /* @__PURE__ */ jsx(Host, {
      children: /* @__PURE__ */ jsx("div", {
        class: "flex flex-wrap mt-4",
        children: /* @__PURE__ */ jsx("div", {
          class: "w-full mb-12 px-4",
          children: /* @__PURE__ */ jsxs("div", {
            class:
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white",
            children: [
              /* @__PURE__ */ jsx("div", {
                class: "rounded-t mb-0 px-4 py-3 border-0",
                children: /* @__PURE__ */ jsxs("div", {
                  class: "flex flex-wrap items-center",
                  children: [
                    /* @__PURE__ */ jsx("div", {
                      class: "relative w-full px-4 max-w-full flex-grow flex-1",
                      children: /* @__PURE__ */ jsx("h3", {
                        class: "font-semibold text-lg text-blueGray-700",
                        children: "Authors",
                      }),
                    }),
                    /* @__PURE__ */ jsx("button", {
                      className:
                        "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                      onClick$: handleRead,
                      children: "Read",
                    }),
                    /* @__PURE__ */ jsx("button", {
                      className:
                        "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                      onClick$: handleSave,
                      children: "Save",
                    }),
                    /* @__PURE__ */ jsx("button", {
                      className:
                        "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                      onClick$: handleDelete,
                      children: "Delete",
                    }),
                  ],
                }),
              }),
              /* @__PURE__ */ jsx("div", {
                class: "block w-full overflow-x-auto",
                children: /* @__PURE__ */ jsxs("table", {
                  class: "items-center w-full bg-transparent border-collapse",
                  children: [
                    /* @__PURE__ */ jsx("thead", {
                      children: /* @__PURE__ */ jsxs("tr", {
                        children: [
                          /* @__PURE__ */ jsx("th", {
                            class:
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100",
                            children: "FirstName",
                          }),
                          /* @__PURE__ */ jsx("th", {
                            class:
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100",
                            children: "LastName",
                          }),
                          /* @__PURE__ */ jsx("th", {
                            class:
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100",
                            children: "Country",
                          }),
                          /* @__PURE__ */ jsx("th", {
                            class:
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100",
                            children: "Users",
                          }),
                          /* @__PURE__ */ jsx("th", {
                            class:
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100",
                            children: "Completion",
                          }),
                          /* @__PURE__ */ jsx("th", {
                            class:
                              "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100",
                          }),
                        ],
                      }),
                    }),
                    /* @__PURE__ */ jsx("tbody", {
                      children: state.authors.map((author) =>
                        /* @__PURE__ */ jsxs("tr", {
                          children: [
                            /* @__PURE__ */ jsxs("th", {
                              class:
                                "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center",
                              children: [
                                /* @__PURE__ */ jsx("img", {
                                  src: images[Math.floor(Math.random() * 19)],
                                  class:
                                    "h-12 w-12 bg-white rounded-full border",
                                  alt: "...",
                                }),
                                /* @__PURE__ */ jsx("span", {
                                  class: "ml-3 font-bold NaN",
                                  children: author.firstName,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsx("td", {
                              class:
                                "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                              children: author.lastName,
                            }),
                            /* @__PURE__ */ jsxs("td", {
                              class:
                                "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                              children: [
                                /* @__PURE__ */ jsx("i", {
                                  class: "fas fa-circle text-orange-500 mr-2",
                                }),
                                " ",
                                author.country,
                              ],
                            }),
                            /* @__PURE__ */ jsx("td", {
                              class:
                                "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                              children: /* @__PURE__ */ jsxs("div", {
                                class: "flex",
                                children: [
                                  /* @__PURE__ */ jsx("img", {
                                    src: "https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg",
                                    alt: "...",
                                    class:
                                      "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow",
                                  }),
                                  /* @__PURE__ */ jsx("img", {
                                    src: "https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg",
                                    alt: "...",
                                    class:
                                      "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4",
                                  }),
                                  /* @__PURE__ */ jsx("img", {
                                    src: "https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg",
                                    alt: "...",
                                    class:
                                      "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4",
                                  }),
                                  /* @__PURE__ */ jsx("img", {
                                    src: "https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png",
                                    alt: "...",
                                    class:
                                      "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4",
                                  }),
                                ],
                              }),
                            }),
                            /* @__PURE__ */ jsx("td", {
                              class:
                                "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                              children: [""].map(() => {
                                const perc =
                                  percentage[Math.floor(Math.random() * 3)];
                                return /* @__PURE__ */ jsxs("div", {
                                  class: "flex items-center",
                                  children: [
                                    /* @__PURE__ */ jsx("span", {
                                      class: "mr-2",
                                      children: perc,
                                    }),
                                    /* @__PURE__ */ jsx("div", {
                                      class: "relative w-full",
                                      children: /* @__PURE__ */ jsx("div", {
                                        class:
                                          "overflow-hidden h-2 text-xs flex rounded bg-green-200",
                                        children: /* @__PURE__ */ jsx("div", {
                                          class:
                                            "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500",
                                          style: `width: ${perc};`,
                                        }),
                                      }),
                                    }),
                                  ],
                                });
                              }),
                            }),
                            /* @__PURE__ */ jsxs("td", {
                              class:
                                "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right",
                              children: [
                                /* @__PURE__ */ jsx("a", {
                                  class: "text-blueGray-500 py-1 px-3",
                                  href: "#pablo",
                                  children: /* @__PURE__ */ jsx("i", {
                                    class: "fas fa-ellipsis-v",
                                  }),
                                }),
                                /* @__PURE__ */ jsxs("div", {
                                  class:
                                    "hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                                  children: [
                                    /* @__PURE__ */ jsx("a", {
                                      href: "#pablo",
                                      class:
                                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                                      children: "Action",
                                    }),
                                    /* @__PURE__ */ jsx("a", {
                                      href: "#pablo",
                                      class:
                                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                                      children: "Another action",
                                    }),
                                    /* @__PURE__ */ jsx("a", {
                                      href: "#pablo",
                                      class:
                                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                                      children: "Something else here",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }, "s_i0g0UjRkWuk")
);
const head = {
  title: "Welcome to Qwik City",
};
const Index = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      images,
      percentage,
      default: index,
      head,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
const { PrismaClient } = pkg;
const prismaClient = new PrismaClient();
const prismaClient$1 = prismaClient;
function trim(v) {
  return v.trim();
}
new EventEmitter();
const authors = trpc$2
  .router()
  .query("list", {
    resolve: () =>
      prismaClient$1.author.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          country: true,
        },
        orderBy: [
          {
            firstName: "asc",
          },
        ],
      }),
  })
  .query("read", {
    input: z.string(),
    resolve: ({ input: id }) => {
      return prismaClient$1.author.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          firstName: true,
        },
      });
    },
  })
  .mutation("save", {
    input: z.object({
      id: z.string(),
      firstName: z.string().min(3).max(50).transform(trim),
      lastName: z.string().min(3).max(50).transform(trim),
      country: z.string().max(1e3).transform(trim),
    }),
    resolve: ({ input: { id, ...data } }) =>
      id
        ? prismaClient$1.author.create({
            data,
            select: {
              id: true,
            },
          })
        : prismaClient$1.author.create({
            data,
            select: {
              id: true,
            },
          }),
  })
  .mutation("delete", {
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }),
    resolve: ({ input: { firstName, lastName } }) =>
      prismaClient$1.author
        .delete({
          where: {
            firstName_lastName: {
              firstName,
              lastName,
            },
          },
        })
        .then(() => void 0),
  });
const createContext = async () => ({});
const router = trpc$2
  .router()
  .transformer(trpcTransformer)
  .merge("authors:", authors);
const onGet = async ({ request, params }) => {
  const response = await resolveTRPCResponse({
    request,
    params,
    router,
    createContext,
  });
  const json = await response.json();
  return json;
};
const onPost = async ({ request, params }) => {
  const response = await resolveTRPCResponse({
    request,
    params,
    router,
    createContext,
  });
  const json = await response.json();
  return json;
};
const ApiTrpcWhateverIndex = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      onGet,
      onPost,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
const Layout = () => Layout_;
const routes = [
  [/^\/$/, [Layout, () => Index]],
  [/^\/api\/trpc\/([^/]+?)\/?$/, [() => ApiTrpcWhateverIndex], ["whatever"], 1],
];
const qwikCityPlan = {
  routes,
};
const cityPlan = qwikCityPlan;
const _qwikCityPlan = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: cityPlan,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);
var require_normalizeHeaderName = __commonJS({
  "node_modules/headers-polyfill/lib/utils/normalizeHeaderName.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normalizeHeaderName = void 0;
    var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
    function normalizeHeaderName(name) {
      if (typeof name !== "string") {
        name = String(name);
      }
      if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === "") {
        throw new TypeError("Invalid character in header field name");
      }
      return name.toLowerCase();
    }
    exports.normalizeHeaderName = normalizeHeaderName;
  },
});
var require_normalizeHeaderValue = __commonJS({
  "node_modules/headers-polyfill/lib/utils/normalizeHeaderValue.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normalizeHeaderValue = void 0;
    function normalizeHeaderValue(value) {
      if (typeof value !== "string") {
        value = String(value);
      }
      return value;
    }
    exports.normalizeHeaderValue = normalizeHeaderValue;
  },
});
var require_Headers = __commonJS({
  "node_modules/headers-polyfill/lib/Headers.js"(exports) {
    var __generator =
      (exports && exports.__generator) ||
      function (thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y["return"]
                      : op[0]
                      ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                      : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
    var __read =
      (exports && exports.__read) ||
      function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
    var __values =
      (exports && exports.__values) ||
      function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
            },
          };
        throw new TypeError(
          s ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    var _a;
    var _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    var normalizeHeaderName_1 = require_normalizeHeaderName();
    var normalizeHeaderValue_1 = require_normalizeHeaderValue();
    var NORMALIZED_HEADERS = Symbol("normalizedHeaders");
    var RAW_HEADER_NAMES = Symbol("rawHeaderNames");
    var HeadersPolyfill3 = (function () {
      function HeadersPolyfill4(init) {
        var _this = this;
        this[_a] = {};
        this[_b] = /* @__PURE__ */ new Map();
        if (
          ["Headers", "HeadersPolyfill"].includes(
            init === null || init === void 0 ? void 0 : init.constructor.name
          ) ||
          init instanceof HeadersPolyfill4
        ) {
          var initialHeaders = init;
          initialHeaders.forEach(function (value, name) {
            _this.append(name, value);
          }, this);
        } else if (Array.isArray(init)) {
          init.forEach(function (_c) {
            var _d = __read(_c, 2),
              name = _d[0],
              value = _d[1];
            _this.append(name, Array.isArray(value) ? value.join(", ") : value);
          });
        } else if (init) {
          Object.getOwnPropertyNames(init).forEach(function (name) {
            var value = init[name];
            _this.append(name, Array.isArray(value) ? value.join(", ") : value);
          });
        }
      }
      HeadersPolyfill4.prototype[
        ((_a = NORMALIZED_HEADERS), (_b = RAW_HEADER_NAMES), Symbol.iterator)
      ] = function () {
        return this.entries();
      };
      HeadersPolyfill4.prototype.keys = function () {
        var _c, _d, name_1, e_1_1;
        var e_1, _e;
        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 5, 6, 7]);
              (_c = __values(Object.keys(this[NORMALIZED_HEADERS]))),
                (_d = _c.next());
              _f.label = 1;
            case 1:
              if (!!_d.done) return [3, 4];
              name_1 = _d.value;
              return [4, name_1];
            case 2:
              _f.sent();
              _f.label = 3;
            case 3:
              _d = _c.next();
              return [3, 1];
            case 4:
              return [3, 7];
            case 5:
              e_1_1 = _f.sent();
              e_1 = { error: e_1_1 };
              return [3, 7];
            case 6:
              try {
                if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
              } finally {
                if (e_1) throw e_1.error;
              }
              return [7];
            case 7:
              return [2];
          }
        });
      };
      HeadersPolyfill4.prototype.values = function () {
        var _c, _d, value, e_2_1;
        var e_2, _e;
        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 5, 6, 7]);
              (_c = __values(Object.values(this[NORMALIZED_HEADERS]))),
                (_d = _c.next());
              _f.label = 1;
            case 1:
              if (!!_d.done) return [3, 4];
              value = _d.value;
              return [4, value];
            case 2:
              _f.sent();
              _f.label = 3;
            case 3:
              _d = _c.next();
              return [3, 1];
            case 4:
              return [3, 7];
            case 5:
              e_2_1 = _f.sent();
              e_2 = { error: e_2_1 };
              return [3, 7];
            case 6:
              try {
                if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
              } finally {
                if (e_2) throw e_2.error;
              }
              return [7];
            case 7:
              return [2];
          }
        });
      };
      HeadersPolyfill4.prototype.entries = function () {
        var _c, _d, name_2, e_3_1;
        var e_3, _e;
        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 5, 6, 7]);
              (_c = __values(Object.keys(this[NORMALIZED_HEADERS]))),
                (_d = _c.next());
              _f.label = 1;
            case 1:
              if (!!_d.done) return [3, 4];
              name_2 = _d.value;
              return [4, [name_2, this.get(name_2)]];
            case 2:
              _f.sent();
              _f.label = 3;
            case 3:
              _d = _c.next();
              return [3, 1];
            case 4:
              return [3, 7];
            case 5:
              e_3_1 = _f.sent();
              e_3 = { error: e_3_1 };
              return [3, 7];
            case 6:
              try {
                if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
              } finally {
                if (e_3) throw e_3.error;
              }
              return [7];
            case 7:
              return [2];
          }
        });
      };
      HeadersPolyfill4.prototype.get = function (name) {
        return (
          this[NORMALIZED_HEADERS][
            normalizeHeaderName_1.normalizeHeaderName(name)
          ] || null
        );
      };
      HeadersPolyfill4.prototype.set = function (name, value) {
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        this[NORMALIZED_HEADERS][normalizedName] =
          normalizeHeaderValue_1.normalizeHeaderValue(value);
        this[RAW_HEADER_NAMES].set(normalizedName, name);
      };
      HeadersPolyfill4.prototype.append = function (name, value) {
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        var resolvedValue = this.has(normalizedName)
          ? this.get(normalizedName) + ", " + value
          : value;
        this.set(name, resolvedValue);
      };
      HeadersPolyfill4.prototype.delete = function (name) {
        if (!this.has(name)) {
          return;
        }
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        delete this[NORMALIZED_HEADERS][normalizedName];
        this[RAW_HEADER_NAMES].delete(normalizedName);
      };
      HeadersPolyfill4.prototype.all = function () {
        return this[NORMALIZED_HEADERS];
      };
      HeadersPolyfill4.prototype.raw = function () {
        var e_4, _c;
        var rawHeaders = {};
        try {
          for (
            var _d = __values(this.entries()), _e = _d.next();
            !_e.done;
            _e = _d.next()
          ) {
            var _f = __read(_e.value, 2),
              name_3 = _f[0],
              value = _f[1];
            rawHeaders[this[RAW_HEADER_NAMES].get(name_3)] = value;
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
        return rawHeaders;
      };
      HeadersPolyfill4.prototype.has = function (name) {
        return this[NORMALIZED_HEADERS].hasOwnProperty(
          normalizeHeaderName_1.normalizeHeaderName(name)
        );
      };
      HeadersPolyfill4.prototype.forEach = function (callback, thisArg) {
        for (var name_4 in this[NORMALIZED_HEADERS]) {
          if (this[NORMALIZED_HEADERS].hasOwnProperty(name_4)) {
            callback.call(
              thisArg,
              this[NORMALIZED_HEADERS][name_4],
              name_4,
              this
            );
          }
        }
      };
      return HeadersPolyfill4;
    })();
    exports.default = HeadersPolyfill3;
  },
});
var require_headersToList = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/headersToList.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headersToList = void 0;
    function headersToList(headers) {
      var headersList = [];
      headers.forEach(function (value, name) {
        var resolvedValue = value.includes(",")
          ? value.split(",").map(function (value2) {
              return value2.trim();
            })
          : value;
        headersList.push([name, resolvedValue]);
      });
      return headersList;
    }
    exports.headersToList = headersToList;
  },
});
var require_headersToString = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/headersToString.js"(exports) {
    var __read =
      (exports && exports.__read) ||
      function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headersToString = void 0;
    var headersToList_1 = require_headersToList();
    function headersToString(headers) {
      var list = headersToList_1.headersToList(headers);
      var lines = list.map(function (_a) {
        var _b = __read(_a, 2),
          name = _b[0],
          value = _b[1];
        var values = [].concat(value);
        return name + ": " + values.join(", ");
      });
      return lines.join("\r\n");
    }
    exports.headersToString = headersToString;
  },
});
var require_headersToObject = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/headersToObject.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headersToObject = void 0;
    var singleValueHeaders = ["user-agent"];
    function headersToObject(headers) {
      var headersObject = {};
      headers.forEach(function (value, name) {
        var isMultiValue =
          !singleValueHeaders.includes(name.toLowerCase()) &&
          value.includes(",");
        headersObject[name] = isMultiValue
          ? value.split(",").map(function (s) {
              return s.trim();
            })
          : value;
      });
      return headersObject;
    }
    exports.headersToObject = headersToObject;
  },
});
var require_stringToHeaders = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/stringToHeaders.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringToHeaders = void 0;
    var Headers_1 = require_Headers();
    function stringToHeaders(str) {
      var lines = str.trim().split(/[\r\n]+/);
      return lines.reduce(function (headers, line) {
        if (line.trim() === "") {
          return headers;
        }
        var parts = line.split(": ");
        var name = parts.shift();
        var value = parts.join(": ");
        headers.append(name, value);
        return headers;
      }, new Headers_1.default());
    }
    exports.stringToHeaders = stringToHeaders;
  },
});
var require_listToHeaders = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/listToHeaders.js"(exports) {
    var __read =
      (exports && exports.__read) ||
      function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.listToHeaders = void 0;
    var Headers_1 = require_Headers();
    function listToHeaders(list) {
      var headers = new Headers_1.default();
      list.forEach(function (_a) {
        var _b = __read(_a, 2),
          name = _b[0],
          value = _b[1];
        var values = [].concat(value);
        values.forEach(function (value2) {
          headers.append(name, value2);
        });
      });
      return headers;
    }
    exports.listToHeaders = listToHeaders;
  },
});
var require_reduceHeadersObject = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/reduceHeadersObject.js"(
    exports
  ) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reduceHeadersObject = void 0;
    function reduceHeadersObject(headers, reducer, initialState) {
      return Object.keys(headers).reduce(function (nextHeaders, name) {
        return reducer(nextHeaders, name, headers[name]);
      }, initialState);
    }
    exports.reduceHeadersObject = reduceHeadersObject;
  },
});
var require_objectToHeaders = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/objectToHeaders.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectToHeaders = void 0;
    var Headers_1 = require_Headers();
    var reduceHeadersObject_1 = require_reduceHeadersObject();
    function objectToHeaders(headersObject) {
      return reduceHeadersObject_1.reduceHeadersObject(
        headersObject,
        function (headers, name, value) {
          var values = [].concat(value).filter(Boolean);
          values.forEach(function (value2) {
            headers.append(name, value2);
          });
          return headers;
        },
        new Headers_1.default()
      );
    }
    exports.objectToHeaders = objectToHeaders;
  },
});
var require_flattenHeadersList = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/flattenHeadersList.js"(
    exports
  ) {
    var __read =
      (exports && exports.__read) ||
      function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flattenHeadersList = void 0;
    function flattenHeadersList(list) {
      return list.map(function (_a) {
        var _b = __read(_a, 2),
          name = _b[0],
          values = _b[1];
        return [name, [].concat(values).join("; ")];
      });
    }
    exports.flattenHeadersList = flattenHeadersList;
  },
});
var require_flattenHeadersObject = __commonJS({
  "node_modules/headers-polyfill/lib/transformers/flattenHeadersObject.js"(
    exports
  ) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flattenHeadersObject = void 0;
    var reduceHeadersObject_1 = require_reduceHeadersObject();
    function flattenHeadersObject(headersObject) {
      return reduceHeadersObject_1.reduceHeadersObject(
        headersObject,
        function (headers, name, value) {
          headers[name] = [].concat(value).join("; ");
          return headers;
        },
        {}
      );
    }
    exports.flattenHeadersObject = flattenHeadersObject;
  },
});
var require_lib = __commonJS({
  "node_modules/headers-polyfill/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flattenHeadersObject =
      exports.flattenHeadersList =
      exports.reduceHeadersObject =
      exports.objectToHeaders =
      exports.listToHeaders =
      exports.stringToHeaders =
      exports.headersToObject =
      exports.headersToList =
      exports.headersToString =
      exports.Headers =
        void 0;
    var Headers_1 = require_Headers();
    Object.defineProperty(exports, "Headers", {
      enumerable: true,
      get: function () {
        return Headers_1.default;
      },
    });
    var headersToString_1 = require_headersToString();
    Object.defineProperty(exports, "headersToString", {
      enumerable: true,
      get: function () {
        return headersToString_1.headersToString;
      },
    });
    var headersToList_1 = require_headersToList();
    Object.defineProperty(exports, "headersToList", {
      enumerable: true,
      get: function () {
        return headersToList_1.headersToList;
      },
    });
    var headersToObject_1 = require_headersToObject();
    Object.defineProperty(exports, "headersToObject", {
      enumerable: true,
      get: function () {
        return headersToObject_1.headersToObject;
      },
    });
    var stringToHeaders_1 = require_stringToHeaders();
    Object.defineProperty(exports, "stringToHeaders", {
      enumerable: true,
      get: function () {
        return stringToHeaders_1.stringToHeaders;
      },
    });
    var listToHeaders_1 = require_listToHeaders();
    Object.defineProperty(exports, "listToHeaders", {
      enumerable: true,
      get: function () {
        return listToHeaders_1.listToHeaders;
      },
    });
    var objectToHeaders_1 = require_objectToHeaders();
    Object.defineProperty(exports, "objectToHeaders", {
      enumerable: true,
      get: function () {
        return objectToHeaders_1.objectToHeaders;
      },
    });
    var reduceHeadersObject_1 = require_reduceHeadersObject();
    Object.defineProperty(exports, "reduceHeadersObject", {
      enumerable: true,
      get: function () {
        return reduceHeadersObject_1.reduceHeadersObject;
      },
    });
    var flattenHeadersList_1 = require_flattenHeadersList();
    Object.defineProperty(exports, "flattenHeadersList", {
      enumerable: true,
      get: function () {
        return flattenHeadersList_1.flattenHeadersList;
      },
    });
    var flattenHeadersObject_1 = require_flattenHeadersObject();
    Object.defineProperty(exports, "flattenHeadersObject", {
      enumerable: true,
      get: function () {
        return flattenHeadersObject_1.flattenHeadersObject;
      },
    });
  },
});
var MODULE_CACHE = /* @__PURE__ */ new WeakMap();
var ROUTE_TYPE_ENDPOINT = 1;
var loadRoute = async (routes2, menus, cacheModules, pathname) => {
  if (Array.isArray(routes2)) {
    for (const route of routes2) {
      const match = route[0].exec(pathname);
      if (match) {
        const loaders = route[1];
        const params = getRouteParams(route[2], match);
        const mods = new Array(loaders.length);
        const pendingLoads = [];
        const menuLoader = getMenuLoader(menus, pathname);
        let menu = void 0;
        loaders.forEach((moduleLoader, i) => {
          loadModule(
            moduleLoader,
            pendingLoads,
            (mod) => (mods[i] = mod),
            cacheModules
          );
        });
        loadModule(
          menuLoader,
          pendingLoads,
          (menuModule) =>
            (menu = menuModule == null ? void 0 : menuModule.default),
          cacheModules
        );
        if (pendingLoads.length > 0) {
          await Promise.all(pendingLoads);
        }
        return { route, params, mods, menu };
      }
    }
  }
  return null;
};
var loadModule = (moduleLoader, pendingLoads, moduleSetter, cacheModules) => {
  if (typeof moduleLoader === "function") {
    const loadedModule = MODULE_CACHE.get(moduleLoader);
    if (loadedModule) {
      moduleSetter(loadedModule);
    } else {
      const l = moduleLoader();
      if (typeof l.then === "function") {
        pendingLoads.push(
          l.then((loadedModule2) => {
            if (cacheModules !== false) {
              MODULE_CACHE.set(moduleLoader, loadedModule2);
            }
            moduleSetter(loadedModule2);
          })
        );
      } else if (l) {
        moduleSetter(l);
      }
    }
  }
};
var getMenuLoader = (menus, pathname) => {
  if (menus) {
    const menu = menus.find(
      (m) => m[0] === pathname || pathname.startsWith(m[0] + "/")
    );
    if (menu) {
      return menu[1];
    }
  }
  return void 0;
};
var getRouteParams = (paramNames, match) => {
  const params = {};
  if (Array.isArray(paramNames)) {
    for (let i = 0; i < paramNames.length; i++) {
      params[paramNames[i]] = match ? match[i + 1] : "";
    }
  }
  return params;
};
var import_headers_polyfill = __toESM(require_lib(), 1);
async function loadUserResponse(
  request,
  url2,
  params,
  endpointModules,
  trailingSlash,
  isEndpointOnly
) {
  if (!isEndpointOnly) {
    isEndpointOnly = request.headers.get("Accept") === "application/json";
  }
  const userResponse = {
    url: url2,
    params,
    status: 200,
    headers: new (typeof Headers === "function"
      ? Headers
      : import_headers_polyfill.Headers)(),
    body: void 0,
    type: "endpoint",
  };
  const { pathname } = url2;
  if (!isEndpointOnly && pathname !== "/") {
    if (trailingSlash) {
      if (!pathname.endsWith("/")) {
        return pageRedirect(userResponse, pathname + "/");
      }
    } else {
      if (pathname.endsWith("/")) {
        return pageRedirect(
          userResponse,
          pathname.slice(0, pathname.length - 1)
        );
      }
    }
  }
  let middlewareIndex = -1;
  let hasRequestHandler = false;
  const abort = () => {
    middlewareIndex = ABORT_INDEX;
  };
  const redirect = (url22, status) => {
    userResponse.status = typeof status === "number" ? status : 307;
    userResponse.headers.set("Location", url22);
    abort();
  };
  const response = {
    get status() {
      return userResponse.status;
    },
    set status(code) {
      userResponse.status = code;
    },
    headers: userResponse.headers,
    redirect,
  };
  const next = async () => {
    middlewareIndex++;
    while (middlewareIndex < endpointModules.length) {
      const endpointModule = endpointModules[middlewareIndex];
      let reqHandler = void 0;
      switch (request.method) {
        case "GET": {
          reqHandler = endpointModule.onGet;
          break;
        }
        case "POST": {
          reqHandler = endpointModule.onPost;
          break;
        }
        case "PUT": {
          reqHandler = endpointModule.onPut;
          break;
        }
        case "PATCH": {
          reqHandler = endpointModule.onPatch;
          break;
        }
        case "OPTIONS": {
          reqHandler = endpointModule.onOptions;
          break;
        }
        case "HEAD": {
          reqHandler = endpointModule.onHead;
          break;
        }
        case "DELETE": {
          reqHandler = endpointModule.onDelete;
          break;
        }
      }
      reqHandler = reqHandler || endpointModule.onRequest;
      if (typeof reqHandler === "function") {
        hasRequestHandler = true;
        const requstEv = {
          request,
          url: url2,
          params,
          response,
          next,
          abort,
        };
        userResponse.body = await reqHandler(requstEv);
      }
      middlewareIndex++;
    }
  };
  try {
    await next();
    if (userResponse.status >= 300 && userResponse.status <= 399) {
      return userResponse;
    }
    if (isEndpointOnly) {
      if (!hasRequestHandler) {
        userResponse.status = 405;
        userResponse.headers.set("Content-Type", "text/plain; charset=utf-8");
        userResponse.body = `Method Not Allowed: ${request.method}`;
      } else {
        if (!userResponse.headers.has("Content-Type")) {
          userResponse.headers.set(
            "Content-Type",
            "application/json; charset=utf-8"
          );
        }
        if (
          userResponse.headers
            .get("Content-Type")
            .startsWith("application/json")
        ) {
          userResponse.body = JSON.stringify(userResponse.body);
        } else if (userResponse.body != null) {
          const type = typeof userResponse.body;
          if (type === "string" || type === "number" || type === "boolean") {
            userResponse.body = String(userResponse.body);
          } else {
            userResponse.status = 500;
            userResponse.headers.set(
              "Content-Type",
              "text/plain; charset=utf-8"
            );
            userResponse.body = "Unsupport response body type";
          }
        }
      }
    } else {
      userResponse.type = "page";
      if (!userResponse.headers.has("Content-Type")) {
        userResponse.headers.set("Content-Type", "text/html; charset=utf-8");
      }
    }
  } catch (e) {
    userResponse.status = 500;
    userResponse.headers.set("Content-Type", "text/plain; charset=utf-8");
    userResponse.body = String(e ? e.stack : e || "Endpoint Error");
  }
  return userResponse;
}
function pageRedirect(userResponseContext, updatedPathname) {
  userResponseContext.status = 308;
  userResponseContext.headers.set(
    "Location",
    updatedPathname + userResponseContext.url.search
  );
  return userResponseContext;
}
var ABORT_INDEX = 999999999;
function getQwikCityUserContext(userResponseContext) {
  return {
    qwikcity: {
      route: {
        href: userResponseContext.url.href,
        pathname: userResponseContext.url.pathname,
        params: { ...userResponseContext.params },
        query: Object.fromEntries(
          userResponseContext.url.searchParams.entries()
        ),
      },
      response: {
        body: userResponseContext.body,
        status: userResponseContext.status,
      },
    },
  };
}
async function requestHandler(requestCtx) {
  const {
    routes: routes2,
    menus,
    cacheModules,
    trailingSlash,
    request,
    response,
    url: url2,
    render: render2,
  } = requestCtx;
  try {
    const loadedRoute = await loadRoute(
      routes2,
      menus,
      cacheModules,
      url2.pathname
    );
    if (loadedRoute) {
      const { mods, params, route } = loadedRoute;
      const isEndpointOnly = route[3] === ROUTE_TYPE_ENDPOINT;
      const userResponse = await loadUserResponse(
        request,
        url2,
        params,
        mods,
        trailingSlash,
        isEndpointOnly
      );
      if (userResponse.type === "endpoint") {
        return response(
          userResponse.status,
          userResponse.headers,
          async (stream) => {
            if (typeof userResponse.body === "string") {
              stream.write(userResponse.body);
            }
          }
        );
      }
      if (userResponse.type === "page") {
        return response(
          userResponse.status,
          userResponse.headers,
          async (stream) => {
            const result = await render2({
              stream,
              url: url2.href,
              userContext: getQwikCityUserContext(userResponse),
            });
            if ((typeof result).html === "string") {
              stream.write(result.html);
            }
          }
        );
      }
    }
  } catch (e) {
    return response(
      500,
      new URLSearchParams({ "Content-Type": "text/plain; charset=utf-8" }),
      async (stream) => {
        stream.write(String(e ? e.stack || e : "Request Handler Error"));
      }
    );
  }
  return requestCtx.next();
}
function patchGlobalFetch() {
  if (
    typeof global !== "undefined" &&
    typeof globalThis.fetch !== "function" &&
    typeof process !== "undefined" &&
    process.versions.node
  ) {
    if (!globalThis.fetch) {
      globalThis.fetch = fetch$1;
      globalThis.Headers = Headers$1;
      globalThis.Request = Request;
      globalThis.Response = Response;
    }
  }
}
var import_headers_polyfill2 = __toESM(require_lib(), 1);
function fromNodeHttp(url2, nodeReq, nodeRes) {
  const requestHeaders = new (
    typeof Headers === "function" ? Headers : import_headers_polyfill2.Headers
  )();
  const nodeRequestHeaders = nodeReq.headers;
  if (nodeRequestHeaders) {
    for (const key in nodeRequestHeaders) {
      const value = nodeRequestHeaders[key];
      if (typeof value === "string") {
        requestHeaders.set(key, value);
      } else if (Array.isArray(value)) {
        for (const v of value) {
          requestHeaders.append(key, v);
        }
      }
    }
  }
  const getRequestBody = async () => {
    const buffers = [];
    for await (const chunk of nodeReq) {
      buffers.push(chunk);
    }
    return Buffer.concat(buffers).toString();
  };
  const serverRequestEv = {
    request: {
      headers: requestHeaders,
      formData: async () => {
        return new URLSearchParams(await getRequestBody());
      },
      json: async () => {
        return JSON.parse(await getRequestBody());
      },
      method: nodeReq.method || "GET",
      text: getRequestBody,
      url: url2.href,
    },
    response: (status, headers, body) => {
      nodeRes.statusCode = status;
      headers.forEach((value, key) => nodeRes.setHeader(key, value));
      body({
        write: (chunk) => nodeRes.write(chunk),
      }).finally(() => {
        nodeRes.end();
      });
      return nodeRes;
    },
    url: url2,
  };
  return serverRequestEv;
}
function qwikCity(render2, opts) {
  patchGlobalFetch();
  const router2 = express.Router();
  let staticDir = opts.staticDir;
  if (typeof staticDir === "string") {
    staticDir = resolve(staticDir);
    let buildDir = opts.buildDir;
    if (typeof buildDir === "string") {
      buildDir = resolve(buildDir);
    } else {
      buildDir = join(staticDir, "build");
    }
    router2.use(
      `/build`,
      express.static(buildDir, { immutable: true, maxAge: "1y", index: false })
    );
    router2.use(express.static(staticDir, { index: false }));
  }
  router2.use(async (nodeReq, nodeRes, next) => {
    try {
      const url2 = new URL(
        nodeReq.url,
        `${nodeReq.protocol}://${nodeReq.headers.host}`
      );
      const serverRequestEv = fromNodeHttp(url2, nodeReq, nodeRes);
      const requestCtx = {
        ...opts,
        ...serverRequestEv,
        render: render2,
        next,
      };
      await requestHandler(requestCtx);
    } catch (e) {
      next(e);
    }
  });
  return router2;
}
const manifest = {
  symbols: {
    s_H0rQkipiyJI: {
      origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
      displayName: "Link_component_A_onClick",
      canonicalFilename: "s_h0rqkipiyji",
      hash: "H0rQkipiyJI",
      ctxKind: "event",
      ctxName: "onClick$",
      captures: true,
      parent: "s_G2veQzc9pPo",
    },
    s_H0uJs8zcWWM: {
      origin: "routes/index.tsx",
      displayName: "routes_component_useClientEffect",
      canonicalFilename: "s_h0ujs8zcwwm",
      hash: "H0uJs8zcWWM",
      ctxKind: "function",
      ctxName: "useClientEffect$",
      captures: true,
      parent: "s_i0g0UjRkWuk",
    },
    s_HsJ0XujGPOA: {
      origin: "components/body/body.tsx",
      displayName: "Body_component",
      canonicalFilename: "s_hsj0xujgpoa",
      hash: "HsJ0XujGPOA",
      ctxKind: "function",
      ctxName: "component$",
      captures: false,
      parent: null,
    },
    s_Qd7xJdG0RqQ: {
      origin: "components/head/head.tsx",
      displayName: "Head_component",
      canonicalFilename: "s_qd7xjdg0rqq",
      hash: "Qd7xJdG0RqQ",
      ctxKind: "function",
      ctxName: "component$",
      captures: false,
      parent: null,
    },
    s_V6WDHthUIQ4: {
      origin: "routes/_layout.tsx",
      displayName: "_layout_component",
      canonicalFilename: "s_v6wdhthuiq4",
      hash: "V6WDHthUIQ4",
      ctxKind: "function",
      ctxName: "component$",
      captures: false,
      parent: null,
    },
    s_i0g0UjRkWuk: {
      origin: "routes/index.tsx",
      displayName: "routes_component",
      canonicalFilename: "s_i0g0ujrkwuk",
      hash: "i0g0UjRkWuk",
      ctxKind: "function",
      ctxName: "component$",
      captures: false,
      parent: null,
    },
    s_G2veQzc9pPo: {
      origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
      displayName: "Link_component",
      canonicalFilename: "s_g2veqzc9ppo",
      hash: "G2veQzc9pPo",
      ctxKind: "function",
      ctxName: "v",
      captures: false,
      parent: null,
    },
    s_f7AhWr0AVVo: {
      origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
      displayName: "Html_component",
      canonicalFilename: "s_f7ahwr0avvo",
      hash: "f7AhWr0AVVo",
      ctxKind: "function",
      ctxName: "v",
      captures: false,
      parent: null,
    },
    s_haiwfuvnx7g: {
      origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
      displayName: "Content_component",
      canonicalFilename: "s_haiwfuvnx7g",
      hash: "haiwfuvnx7g",
      ctxKind: "function",
      ctxName: "v",
      captures: false,
      parent: null,
    },
    s_3YhHhHxUFDw: {
      origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
      displayName: "Html_component_useWatch",
      canonicalFilename: "s_3yhhhhxufdw",
      hash: "3YhHhHxUFDw",
      ctxKind: "function",
      ctxName: "O",
      captures: true,
      parent: "s_f7AhWr0AVVo",
    },
    s_Hofp2Vc8TAk: {
      origin: "routes/index.tsx",
      displayName: "routes_component_handleSave",
      canonicalFilename: "s_hofp2vc8tak",
      hash: "Hofp2Vc8TAk",
      ctxKind: "function",
      ctxName: "$",
      captures: true,
      parent: "s_i0g0UjRkWuk",
    },
    s_NWYdSXbw5gw: {
      origin: "routes/index.tsx",
      displayName: "routes_component_handleDelete",
      canonicalFilename: "s_nwydsxbw5gw",
      hash: "NWYdSXbw5gw",
      ctxKind: "function",
      ctxName: "$",
      captures: true,
      parent: "s_i0g0UjRkWuk",
    },
    s_ZreBWQpGNgY: {
      origin: "routes/index.tsx",
      displayName: "routes_component_refreshList",
      canonicalFilename: "s_zrebwqpgngy",
      hash: "ZreBWQpGNgY",
      ctxKind: "function",
      ctxName: "$",
      captures: true,
      parent: "s_i0g0UjRkWuk",
    },
    s_npRMn7yvVyg: {
      origin: "routes/index.tsx",
      displayName: "routes_component_handleRead",
      canonicalFilename: "s_nprmn7yvvyg",
      hash: "npRMn7yvVyg",
      ctxKind: "function",
      ctxName: "$",
      captures: true,
      parent: "s_i0g0UjRkWuk",
    },
  },
  mapping: {
    s_H0rQkipiyJI: "q-1a02a7e4.js",
    s_H0uJs8zcWWM: "q-c4d76fe6.js",
    s_HsJ0XujGPOA: "q-74baedd9.js",
    s_Qd7xJdG0RqQ: "q-ea6d3d7a.js",
    s_V6WDHthUIQ4: "q-9329e07a.js",
    s_i0g0UjRkWuk: "q-c4d76fe6.js",
    s_G2veQzc9pPo: "q-1a02a7e4.js",
    s_f7AhWr0AVVo: "q-8883adab.js",
    s_haiwfuvnx7g: "q-2cb0ca53.js",
    s_3YhHhHxUFDw: "q-8883adab.js",
    s_Hofp2Vc8TAk: "q-c4d76fe6.js",
    s_NWYdSXbw5gw: "q-c4d76fe6.js",
    s_ZreBWQpGNgY: "q-c4d76fe6.js",
    s_npRMn7yvVyg: "q-c4d76fe6.js",
  },
  bundles: {
    "q-1a02a7e4.js": {
      size: 475,
      symbols: ["s_G2veQzc9pPo", "s_H0rQkipiyJI"],
      imports: ["q-efff9a9c.js"],
    },
    "q-2407a55c.js": {
      size: 208,
      symbols: [],
      imports: ["q-efff9a9c.js"],
      dynamicImports: ["q-d83a62ee.js", "q-e4925f73.js"],
    },
    "q-2cb0ca53.js": {
      size: 246,
      symbols: ["s_haiwfuvnx7g"],
      imports: ["q-efff9a9c.js"],
    },
    "q-73598dc3.js": { size: 58, symbols: [], imports: ["q-efff9a9c.js"] },
    "q-74baedd9.js": {
      size: 114,
      symbols: ["s_HsJ0XujGPOA"],
      imports: ["q-efff9a9c.js"],
    },
    "q-8883adab.js": {
      size: 1612,
      symbols: ["s_3YhHhHxUFDw", "s_f7AhWr0AVVo"],
      imports: ["q-efff9a9c.js"],
      dynamicImports: ["q-2407a55c.js"],
    },
    "q-9329e07a.js": {
      size: 135,
      symbols: ["s_V6WDHthUIQ4"],
      imports: ["q-efff9a9c.js"],
    },
    "q-c4d76fe6.js": {
      size: 64717,
      symbols: [
        "s_H0uJs8zcWWM",
        "s_Hofp2Vc8TAk",
        "s_i0g0UjRkWuk",
        "s_npRMn7yvVyg",
        "s_NWYdSXbw5gw",
        "s_ZreBWQpGNgY",
      ],
      imports: ["q-e4925f73.js", "q-efff9a9c.js"],
    },
    "q-d83a62ee.js": {
      size: 158,
      symbols: [],
      imports: ["q-efff9a9c.js"],
      dynamicImports: ["q-9329e07a.js"],
    },
    "q-e4925f73.js": {
      size: 1641,
      symbols: [],
      imports: ["q-efff9a9c.js"],
      dynamicImports: ["q-c4d76fe6.js"],
    },
    "q-ea6d3d7a.js": {
      size: 405,
      symbols: ["s_Qd7xJdG0RqQ"],
      imports: ["q-efff9a9c.js"],
    },
    "q-efff9a9c.js": {
      size: 29839,
      symbols: [],
      dynamicImports: [
        "q-1a02a7e4.js",
        "q-2cb0ca53.js",
        "q-74baedd9.js",
        "q-8883adab.js",
        "q-ea6d3d7a.js",
      ],
    },
  },
  injections: [
    {
      tag: "link",
      location: "head",
      attributes: { rel: "stylesheet", href: "/build/q-f655600f.css" },
    },
  ],
  version: "1",
  options: {
    target: "client",
    buildMode: "production",
    forceFullBuild: true,
    entryStrategy: { type: "smart" },
  },
  platform: {
    qwik: "0.0.39",
    vite: "",
    rollup: "2.77.2",
    env: "node",
    os: "darwin",
    node: "18.4.0",
  },
};
const M = /* @__PURE__ */ createContext$1("qc-c"),
  U = /* @__PURE__ */ createContext$1("qc-ic"),
  D = /* @__PURE__ */ createContext$1("qc-h"),
  S = /* @__PURE__ */ createContext$1("qc-l"),
  N = /* @__PURE__ */ createContext$1("qc-n"),
  ct = /* @__PURE__ */ componentQrl(
    inlinedQrl(() => {
      const { contents: t } = useContext(U),
        n = t.length;
      if (n > 0) {
        let e = jsx$1(t[n - 1].default, {});
        for (let o = n - 2; o >= 0; o--)
          e = jsx$1(t[o].default, {
            children: e,
          });
        return e;
      }
      return jsx$1(SkipRerender, {});
    }, "Content_component_haiwfuvnx7g")
  ),
  H = /* @__PURE__ */ new WeakMap(),
  Y = async (t, n, e, o) => {
    if (Array.isArray(t))
      for (const s of t) {
        const i = s[0].exec(o);
        if (i) {
          const c = s[1],
            r = X(s[2], i),
            p = new Array(c.length),
            l = [],
            u = K(n, o);
          let a;
          return (
            c.forEach((f, d) => {
              Q(f, l, (x) => (p[d] = x), e);
            }),
            Q(u, l, (f) => (a = f == null ? void 0 : f.default), e),
            l.length > 0 && (await Promise.all(l)),
            {
              route: s,
              params: r,
              mods: p,
              menu: a,
            }
          );
        }
      }
    return null;
  },
  Q = (t, n, e, o) => {
    if (typeof t == "function") {
      const s = H.get(t);
      if (s) e(s);
      else {
        const i = t();
        typeof i.then == "function"
          ? n.push(
              i.then((c) => {
                o !== false && H.set(t, c), e(c);
              })
            )
          : i && e(i);
      }
    }
  },
  K = (t, n) => {
    if (t) {
      const e = t.find((o) => o[0] === n || n.startsWith(o[0] + "/"));
      if (e) return e[1];
    }
  },
  X = (t, n) => {
    const e = {};
    if (Array.isArray(t))
      for (let o = 0; o < t.length; o++) e[t[o]] = n ? n[o + 1] : "";
    return e;
  },
  Z = (t, n, e) => {
    const o = W(),
      s = {
        data: t ? t.body : null,
        head: o,
        ...n,
      };
    for (let i = e.length - 1; i >= 0; i--) {
      const c = e[i] && e[i].head;
      c &&
        (typeof c == "function" ? P(o, c(s)) : typeof c == "object" && P(o, c));
    }
    return s.head;
  },
  P = (t, n) => {
    typeof n.title == "string" && (t.title = n.title),
      R(t.meta, n.meta),
      R(t.links, n.links),
      R(t.styles, n.styles);
  },
  R = (t, n) => {
    if (Array.isArray(n))
      for (const e of n) {
        if (typeof e.key == "string") {
          const o = t.findIndex((s) => s.key === e.key);
          if (o > -1) {
            t[o] = e;
            continue;
          }
        }
        t.push(e);
      }
  },
  W = () => ({
    title: "",
    meta: [],
    links: [],
    styles: [],
  }),
  rt = () => useContext(D),
  tt = () => useContext(S),
  nt = () => useContext(N),
  V = () => noSerialize(useUserContext("qwikcity")),
  at = /* @__PURE__ */ componentQrl(
    inlinedQrl(() => {
      const t = V(),
        n = useStore(() => {
          const c = t == null ? void 0 : t.route;
          if (!c) throw new Error("Missing Qwik City User Context");
          return c;
        }),
        e = useStore(() => {
          const c = t == null ? void 0 : t.route;
          if (!c) throw new Error("Missing Qwik City User Context");
          const r = new URL(c.href);
          return {
            path: r.pathname + r.search,
          };
        }),
        o = useStore(W),
        s = useStore({
          headings: void 0,
          menu: void 0,
        }),
        i = useStore({
          contents: [],
        });
      return (
        useContextProvider(M, s),
        useContextProvider(U, i),
        useContextProvider(D, o),
        useContextProvider(S, n),
        useContextProvider(N, e),
        useWatchQrl(
          inlinedQrl(
            async (c) => {
              const [r, p, l, u, a, f] = useLexicalScope(),
                { default: d } = await Promise.resolve().then(
                  () => _qwikCityPlan
                ),
                x = c(f, "path"),
                C = new URL(x, a.href),
                k = await Y(d.routes, d.menus, d.cacheModules, C.pathname);
              if (k) {
                const _ = k.mods,
                  z2 = _[_.length - 1],
                  L = Z(l == null ? void 0 : l.response, a, _);
                if (
                  ((u.links = L.links),
                  (u.meta = L.meta),
                  (u.styles = L.styles),
                  (u.title = L.title),
                  (r.headings = z2.headings),
                  (r.menu = k.menu),
                  (p.contents = noSerialize(_)),
                  (a.href = C.href),
                  (a.pathname = C.pathname),
                  (a.params = {
                    ...k.params,
                  }),
                  (a.query = Object.fromEntries(C.searchParams.entries())),
                  isBrowser)
                ) {
                  const q = window._qwikcity_pop;
                  q !== 2 && window.history.pushState(null, "", x),
                    q ||
                      window.addEventListener("popstate", () => {
                        (f.path = window.location.href),
                          (window._qwikcity_pop = 2);
                      }),
                    (window._qwikcity_pop = 1);
                }
              }
            },
            "Html_component_useWatch_3YhHhHxUFDw",
            [s, i, t, o, n, e]
          )
        ),
        /* @__PURE__ */ jsx(SkipRerender, {})
      );
    }, "Html_component_f7AhWr0AVVo"),
    {
      tagName: "html",
    }
  );
/* @__PURE__ */ componentQrl(
  inlinedQrl((t) => {
    const n = nt();
    return /* @__PURE__ */ jsx(Host, {
      "preventdefault:click": true,
      href: t.href,
      onClick$: inlinedQrl(
        () => {
          const [o, s] = useLexicalScope();
          s.href && (o.path = s.href);
        },
        "Link_component_A_onClick_H0rQkipiyJI",
        [n, t]
      ),
      children: /* @__PURE__ */ jsx(Slot, {}),
    });
  }, "Link_component_G2veQzc9pPo"),
  {
    tagName: "a",
  }
);
const Body = /* @__PURE__ */ componentQrl(
  inlinedQrl(() => {
    return /* @__PURE__ */ jsx(Host, {
      children: /* @__PURE__ */ jsx(ct, {}),
    });
  }, "s_HsJ0XujGPOA"),
  {
    tagName: "body",
  }
);
const Head = /* @__PURE__ */ componentQrl(
  inlinedQrl(() => {
    const head2 = rt();
    const loc = tt();
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx("meta", {
          charSet: "utf-8",
        }),
        /* @__PURE__ */ jsx("title", {
          children: head2.title ? `${head2.title} - Qwik` : `Qwik`,
        }),
        /* @__PURE__ */ jsx("link", {
          rel: "canonical",
          href: loc.href,
        }),
        head2.meta.map((m) =>
          /* @__PURE__ */ jsx("meta", {
            ...m,
          })
        ),
        head2.links.map((l) =>
          /* @__PURE__ */ jsx("link", {
            ...l,
          })
        ),
        head2.styles.map((s) =>
          /* @__PURE__ */ jsx("style", {
            ...s.props,
            dangerouslySetInnerHTML: s.style,
          })
        ),
      ],
    });
  }, "s_Qd7xJdG0RqQ"),
  {
    tagName: "head",
  }
);
const global$1 = "";
const Root = () => {
  return /* @__PURE__ */ jsxs(at, {
    lang: "en",
    children: [/* @__PURE__ */ jsx(Head, {}), /* @__PURE__ */ jsx(Body, {})],
  });
};
function render(opts) {
  return renderToStream(/* @__PURE__ */ jsx(Root, {}), {
    manifest,
    ...opts,
  });
}
const app = express();
app.use(
  qwikCity(render, {
    ...cityPlan,
    staticDir: join(fileURLToPath(import.meta.url), "..", "..", "dist"),
  })
);
app.listen(8080, () => {
  console.log(`http://localhost:8080/`);
});
