import { mount } from "svelte";
import "@belak/ui/css";
import App from "./App.svelte";

mount(App, { target: document.getElementById("app")! });
