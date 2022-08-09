import { component$, Host, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <Host>
      <main>
        <Slot />
      </main>
    </Host>
  );
});
