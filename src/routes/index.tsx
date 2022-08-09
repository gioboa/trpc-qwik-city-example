import {
  $,
  component$,
  Host,
  useClientEffect$,
  useStore,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import trpc from "~/client/trpc";

export const images = [
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

export const percentage = ["10%", "80%", "50%", "30%"];

export default component$(() => {
  const state = useStore<{
    authors: {
      id: string;
      firstName: string;
      lastName: string;
      country: string;
    }[];
  }>({
    authors: [],
  });

  const refreshList = $(async () => {
    const authors = await trpc(fetch.bind(window)).query("authors:list");
    state.authors = authors;
  });

  useClientEffect$(() => refreshList());

  const handleRead = $(async () => {
    const author = await trpc(fetch.bind(window)).query(
      "authors:read",
      state.authors[0].id
    );
    console.log("authors:read --> ", author);
  });

  const handleSave = $(async () => {
    await trpc(fetch.bind(window)).mutation("authors:save", {
      id: Math.random().toString(),
      firstName: "John",
      lastName: "Doe",
      country: "England",
    });
    refreshList();
  });

  const handleDelete = $(async () => {
    await trpc(fetch.bind(window)).mutation("authors:delete", {
      firstName: "John",
      lastName: "Doe",
    });
    refreshList();
  });
  return (
    <Host>
      <div class="flex flex-wrap mt-4">
        <div class="w-full mb-12 px-4">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-lg text-blueGray-700">
                    Authors
                  </h3>
                </div>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick$={handleRead}
                >
                  Read
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick$={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick$={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <table class="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                      FirstName
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                      LastName
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                      Country
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                      Team members
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                      Completion
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {state.authors.map((author) => (
                    <tr>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={images[Math.floor(Math.random() * 19)]}
                          class="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        />
                        <span class="ml-3 font-bold NaN">
                          {author.firstName}
                        </span>
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {author.lastName}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i class="fas fa-circle text-orange-500 mr-2"></i>{" "}
                        {author.country}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex">
                          <img
                            src="https://demos.creative-tim.com/notus-nextjs/img/team-1-800x800.jpg"
                            alt="..."
                            class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                          />
                          <img
                            src="https://demos.creative-tim.com/notus-nextjs/img/team-2-800x800.jpg"
                            alt="..."
                            class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                          />
                          <img
                            src="https://demos.creative-tim.com/notus-nextjs/img/team-3-800x800.jpg"
                            alt="..."
                            class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                          />
                          <img
                            src="https://demos.creative-tim.com/notus-nextjs/img/team-4-470x470.png"
                            alt="..."
                            class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                          />
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {[""].map(() => {
                          const perc =
                            percentage[Math.floor(Math.random() * 3)];
                          return (
                            <div class="flex items-center">
                              <span class="mr-2">{perc}</span>
                              <div class="relative w-full">
                                <div class="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                  <div
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                    style={`width: ${perc};`}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <a class="text-blueGray-500 py-1 px-3" href="#pablo">
                          <i class="fas fa-ellipsis-v"></i>
                        </a>
                        <div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48">
                          <a
                            href="#pablo"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                          >
                            Action
                          </a>
                          <a
                            href="#pablo"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                          >
                            Another action
                          </a>
                          <a
                            href="#pablo"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                          >
                            Something else here
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Host>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik City",
};
