<template>
  <div class="relative min-h-screen overflow-hidden bg-black text-white">
    <div class="absolute inset-0">
      <div
        class="absolute left-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/20 blur-3xl"
      />

      <div
        class="absolute bottom-[-10rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-violet-700/20 blur-3xl"
      />

      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />
    </div>

    <div
      class="relative z-10 flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div class="mx-auto max-w-5xl text-center">
        <div
          class="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl"
        >
          <span class="h-2 w-2 rounded-full bg-green-400" />
          Experimental Open Source Ecosystem
        </div>

        <img
          src="/logo.svg"
          alt="Undreamt"
          class="mx-auto mb-10 h-40 w-40 drop-shadow-[0_0_40px_rgba(168,85,247,0.45)]"
        />

        <h1
          class="mx-auto max-w-4xl text-6xl font-black tracking-tight md:text-8xl"
        >
          Undreamt
        </h1>

        <p
          class="mt-6 text-2xl font-medium tracking-wide text-zinc-300 md:text-3xl"
        >
          Building what has never been dreamt.
        </p>

        <p
          class="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400"
        >
          Open-source community focused on creating tools, systems,
          infrastructure, and experimental technology for developers,
          researchers, creators, and businesses.
        </p>

        <div
          class="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-2xl"
        >
          <div
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-300"
          >
            <i class="pi pi-wrench" />
            Under Maintenance
          </div>

          <h2 class="text-3xl font-bold md:text-4xl">
            Public Platform In Development
          </h2>

          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            We are currently building the foundation of the Undreamt
            ecosystem — including infrastructure, developer tooling,
            framework systems, and experimental platforms.
          </p>

          <div
            class="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <div
              v-for="item in tags"
              :key="item"
              class="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm text-zinc-300 transition hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <div class="mt-12 flex items-center justify-center">
          <a
            href="https://github.com/undreamt-hq"
            target="_blank"
            class="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-zinc-400 backdrop-blur-xl transition hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:text-white"
          >
            <i class="pi pi-github text-xl" />

            <span class="text-sm font-medium tracking-wide">
              github.com/undreamt-hq
            </span>
          </a>
        </div>

        <div class="mt-10 text-sm tracking-wide text-zinc-600">
          © {{ year }} Undreamt
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const tags = [
  'Experimental Infrastructure',
  'Developer Tooling',
  'Framework Architecture',
  'Open Source Ecosystems',
  'Systems Engineering',
  'Research Driven Development',
  'Fullstack Platforms',
  'Modern Runtime Systems'
]
</script>
