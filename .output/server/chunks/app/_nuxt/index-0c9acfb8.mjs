import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { defineComponent, ref, computed, h, mergeProps, useSSRContext, unref, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHead, b as useNuxtApp, _ as _export_sfc, d as useRuntimeConfig, a as useState } from '../server.mjs';
import { v as encodeParam, l as hasProtocol, x as withLeadingSlash, j as joinURL, p as parseURL, o as defu, y as encodePath } from '../../../index.mjs';
import { _ as __nuxt_component_0$6 } from './nuxt-link-c043d618.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const _imports_0$3 = "" + publicAssetsURL("img/loading.gif");
const _sfc_main$l = {
  name: "LoadingScreen",
  props: ["isLoading"]
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: ["fixed duration-300 w-full bg-white h-screen flex justify-center items-center z-50", {
      "opacity-100": $props.isLoading,
      "opacity-0 !-z-10": !$props.isLoading
    }]
  }, _attrs))}><img${ssrRenderAttr("src", _imports_0$3)} class="w-60"></section>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingScreen.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$h]]);
const _imports_0$2 = "" + publicAssetsURL("img/logo.png");
const _sfc_main$k = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-5 h-12" }, _attrs))}><div class="w-12 h-100 p-1 bg-gray-950 rounded-full"><img${ssrRenderAttr("src", _imports_0$2)} class="h-full object-cover"></div><h2 class="text-xl font-bold self-center duration-300 text-black dark:text-white">Tharindu</h2></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MyLogo.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$j = {
  name: "NavItem",
  props: ["path", "name", "isActive"]
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.path,
    class: ["mx-5 duration-300 cursor-pointer text-gray-600 dark:text-slate-300", {
      active: $props.isActive
    }]
  }, _attrs))} data-v-3e23db20>${ssrInterpolate($props.name)}</a>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavItem.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-3e23db20"]]);
const _sfc_main$i = {
  name: "SocialIcons",
  props: ["link", "file"]
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: $props.link,
    class: "cursor-pointer"
  }, _attrs))}><img${ssrRenderAttr("src", `/img/social/${$props.file}`)} class="grayscale hover:filter-none duration-300 w-8 hover:-translate-y-2 hover:scale-110 mx-1"></a>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialMedia.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$e]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$h = {
  __name: "HomeHeader",
  __ssrInlineRender: true,
  props: ["scrollTop", "showBackground"],
  setup(__props) {
    const color = useColorMode();
    const items = [
      {
        path: "#",
        name: "Home"
      },
      {
        path: "#",
        name: "About"
      },
      {
        path: "#",
        name: "Experience"
      },
      {
        path: "#",
        name: "Portfolio"
      },
      {
        path: "#",
        name: "Insights"
      },
      {
        path: "#",
        name: "Contact"
      }
    ];
    const isDark = computed(() => {
      return color.preference === "dark";
    });
    const activePage = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_my_logo = __nuxt_component_0$4;
      const _component_nav_item = __nuxt_component_1$5;
      const _component_social_media = __nuxt_component_2$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-3 px-5 fixed w-full z-40" }, _attrs))} data-v-b1b87e72><header class="${ssrRenderClass([{
        "bg-dark": unref(isDark) && __props.showBackground,
        "bg-light": !unref(isDark) && __props.showBackground,
        "shadow-md": __props.showBackground
      }, "w-full h-16 rounded-xl flex justify-between items-center px-5 duration-300 backdrop-blur-md"])}" data-v-b1b87e72>`);
      _push(ssrRenderComponent(_component_my_logo, null, null, _parent));
      _push(`<nav class="p-0 m-0 hidden lg:flex justify-center" data-v-b1b87e72><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(ssrRenderComponent(_component_nav_item, {
          key: item.name,
          name: item.name,
          path: item.path,
          isActive: index === unref(activePage)
        }, null, _parent));
      });
      _push(`<!--]--></nav><div class="hidden md:flex" data-v-b1b87e72>`);
      _push(ssrRenderComponent(_component_social_media, {
        link: "#",
        file: "facebook.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_social_media, {
        link: "#",
        file: "github.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_social_media, {
        link: "#",
        file: "linkedin.png"
      }, null, _parent));
      _push(ssrRenderComponent(_component_social_media, {
        link: "#",
        file: "youtube.png"
      }, null, _parent));
      _push(`</div></header></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeHeader.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-b1b87e72"]]);
const _sfc_main$g = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(_attrs)}>Software Engineer</span>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WordChanger.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$f = {
  name: "PrimaryButton",
  props: ["text"]
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "relative px-5 py-3 mx-3 duration-300 overflow-hidden rounded cursor-pointer flex justify-center items-center shadow-md hover:shadow-lg text-black dark:text-white" }, _attrs))} data-v-290429fa><div class="${ssrRenderClass(`background absolute h-full w-full duration-300 img ${_ctx.$colorMode.preference}`)}" data-v-290429fa></div><span class="relative" data-v-290429fa>${ssrInterpolate($props.text)}</span></button>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrimaryButton.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-290429fa"]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const convertHexToRgbFormat = (value) => value.startsWith("#") ? value.replace("#", "rgb_") : value;
const removePathExtension = (value) => value.replace(/\.[^/.]+$/, "");
const operationsGenerator$1 = createOperationsGenerator({
  keyMap: {
    fit: "c",
    width: "w",
    height: "h",
    format: "f",
    quality: "q",
    background: "b",
    rotate: "a",
    roundCorner: "r",
    gravity: "g",
    effect: "e",
    color: "co",
    flags: "fl",
    dpr: "dpr",
    opacity: "o",
    overlay: "l",
    underlay: "u",
    transformation: "t",
    zoom: "z",
    colorSpace: "cs",
    customFunc: "fn",
    density: "dn",
    aspectRatio: "ar",
    blur: "e_blur"
  },
  valueMap: {
    fit: {
      fill: "fill",
      inside: "pad",
      outside: "lpad",
      cover: "fit",
      contain: "scale",
      minCover: "mfit",
      minInside: "mpad",
      thumbnail: "thumb",
      cropping: "crop",
      coverLimit: "limit"
    },
    format: {
      jpeg: "jpg"
    },
    background(value) {
      return convertHexToRgbFormat(value);
    },
    color(value) {
      return convertHexToRgbFormat(value);
    },
    gravity: {
      auto: "auto",
      subject: "auto:subject",
      face: "face",
      sink: "sink",
      faceCenter: "face:center",
      multipleFaces: "faces",
      multipleFacesCenter: "faces:center",
      north: "north",
      northEast: "north_east",
      northWest: "north_west",
      west: "west",
      southWest: "south_west",
      south: "south",
      southEast: "south_east",
      east: "east",
      center: "center"
    }
  },
  joinWith: ",",
  formatter: (key, value) => key.includes("_") ? `${key}:${value}` : `${key}_${value}`
});
const defaultModifiers = {
  format: "auto",
  quality: "auto"
};
const getImage$1 = (src, { modifiers = {}, baseURL = "/" } = {}) => {
  const mergeModifiers = defu(modifiers, defaultModifiers);
  const operations = operationsGenerator$1(mergeModifiers);
  const remoteFolderMapping = baseURL.match(/\/image\/upload\/(.*)/);
  if ((remoteFolderMapping == null ? void 0 : remoteFolderMapping.length) >= 1) {
    const remoteFolder = remoteFolderMapping[1];
    const baseURLWithoutRemoteFolder = baseURL.replace(remoteFolder, "");
    return {
      url: joinURL(baseURLWithoutRemoteFolder, operations, remoteFolder, src)
    };
  } else if (/\/image\/fetch\/?/.test(baseURL)) {
    src = encodePath(src);
  } else {
    src = removePathExtension(src);
  }
  return {
    url: joinURL(baseURL, operations, src)
  };
};
const cloudinaryRuntime$sI71Sa8hA5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage: getImage$1
});
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$Bj4kght2U7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["cloudinary"]: { provider: cloudinaryRuntime$sI71Sa8hA5, defaults: { "baseURL": "https://res.cloudinary.com/ddouqxzyk/image/upload/v1697998269/" } },
  ["ipx"]: { provider: ipxRuntime$Bj4kght2U7, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_1$3 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _imports_0$1 = "" + publicAssetsURL("img/T.png");
const _sfc_main$e = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_word_changer = __nuxt_component_0$3;
  const _component_primary_button = __nuxt_component_2$4;
  const _component_NuxtImg = __nuxt_component_1$3;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "snap-start bg-cover bg-center duration-300 flex flex-col justify-center lg:flex-row pb-0",
    style: `background-image: url(/img/hero-${_ctx.$colorMode.preference}.webp);`
  }, _attrs))} data-v-e2d10058><div class="w-full lg:w-1/2 mb-5 lg:mb-0 order-2 lg:order-1" data-v-e2d10058><div class="flex flex-col justify-center text-center text-gray-800 dark:text-slate-100 lg:text-left h-full px-5 md:px-20 lg:px-0 lg:pl-20" data-aos="zoom-in" data-v-e2d10058><div class="flex flex-col justify-center lg:block font-bold mb-5 duration-300" data-v-e2d10058><span class="self-center mr-4 text-lg font-monteserrat-alt" data-v-e2d10058>Hello, It&#39;s Me</span><div class="flex mt-3 self-center text-4xl lg:text-5xl" data-v-e2d10058><img${ssrRenderAttr("src", _imports_0$1)} class="w-10 lg:w-16" data-v-e2d10058><span class="text-primary self-end" data-v-e2d10058>harindu Nimesh</span></div></div><h2 class="text-2xl lg:text-4xl font-bold mb-5 duration-300" data-v-e2d10058> A `);
  _push(ssrRenderComponent(_component_word_changer, null, null, _parent));
  _push(`</h2><p class="text-lg duration-300 font-monteserrat-alt" data-v-e2d10058> I&#39;m a passionate Software Engineer hailing from Sri Lanka, dedicated to crafting innovative solutions. Explore my portfolio and join me on my journey of tech excellence. </p><div class="flex justify-center" data-v-e2d10058>`);
  _push(ssrRenderComponent(_component_primary_button, {
    text: "Save My Resume",
    class: "mt-8"
  }, null, _parent));
  _push(`</div></div></div><div class="w-full lg:w-1/2 h-full lg:min-h-screen mb-3 order-1 lg:order-2 flex justify-center items-center" data-aos="zoom-in" data-v-e2d10058>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    provider: "cloudinary",
    format: "webp",
    src: "/portfolio/nhi1ndyhfh8ovdt1r3es.png",
    sizes: "sm:300px md:400px lg:500px xl:600px",
    class: "man"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Hero.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-e2d10058"]]);
const _sfc_main$d = {
  name: "MainHeading",
  props: ["mainHeading", "subHeading", "lastSymbol"]
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "py-3 mb-10 h-fit w-full",
    "data-aos": "fade-right"
  }, _attrs))} data-v-7b63c82a><div class="px-10 relative h-fit w-fit text-gray-800 dark:text-white duration-300" data-v-7b63c82a><div class="main-heading" data-v-7b63c82a>${ssrInterpolate($props.mainHeading)}</div><div class="sub-heading" data-v-7b63c82a>${ssrInterpolate($props.subHeading)} <span class="text-primary" data-v-7b63c82a>${ssrInterpolate($props.lastSymbol)}</span></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainHeading.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-7b63c82a"]]);
const _sfc_main$c = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_main_heading = __nuxt_component_0$1;
  const _component_NuxtImg = __nuxt_component_1$3;
  const _component_primary_button = __nuxt_component_2$4;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "snap-start bg-cover bg-center duration-300 flex flex-col" }, _attrs))} data-v-17df9d79>`);
  _push(ssrRenderComponent(_component_main_heading, {
    "main-heading": "About",
    "sub-heading": "Who Am I ",
    "last-symbol": "?"
  }, null, _parent));
  _push(`<div class="flex px-5" data-v-17df9d79><div class="w-1/2 justify-center items-center hidden lg:flex" data-aos="fade-up" data-v-17df9d79>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    provider: "cloudinary",
    format: "webp",
    src: "/portfolio/nhi1ndyhfh8ovdt1r3es.png",
    sizes: "sm:200px md:300px lg:400px xl:500px"
  }, null, _parent));
  _push(`</div><div class="w-full lg:w-1/2 h-100 blue-line md:px-5 duration-300 text-black dark:text-white" data-aos="fade-left" data-v-17df9d79><p class="mb-5 font-monteserrat-alt" data-v-17df9d79> I&#39;m <strong class="text-primary" data-v-17df9d79>Tharindu Nimesh</strong>, a passionate student at the <a href="https://javainstitute.edu.lk" class="underline text-blue-500 cursor-pointer" data-v-17df9d79> Java Institute For Advanced Technology (JIAT) </a> based in Sri Lanka. My tech journey has been an exciting adventure, driven by my fascination with web development, especially backend work. This intrigue led me into the intricate world of coding, where I&#39;ve honed skills in programming languages, databases, and server-side scripting during my time at JIAT. My passion lies in crafting robust, efficient, and secure web applications, whether it&#39;s creating scalable APIs, optimizing databases, or solving complex server issues. I&#39;m eager to continue growing as a backend developer, contributing to the ever-evolving web technology landscape. </p><p class="mb-5 font-monteserrat-alt" data-v-17df9d79> Beyond code, I love exploring new programming paradigms, staying updated with tech blogs, and collaborating with peers on innovative projects. I strongly believe in technology&#39;s power to shape the future, and I&#39;m excited to be part of this dynamic field. Please explore my portfolio and reach out to discuss potential collaborations on cutting-edge web solutions. Together, let&#39;s code the future! </p><div class="flex justify-center mt-5" data-v-17df9d79>`);
  _push(ssrRenderComponent(_component_primary_button, { text: "Contact Me" }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/About.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-17df9d79"]]);
const _sfc_main$b = {
  name: "ProgressBar",
  props: ["percentage", "name"]
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full mt-5 duration-300 text-black dark:text-white" }, _attrs))}><p class="ml-4 font-monteserrat-alt text-sm duration-300">${ssrInterpolate($props.name)}</p><div class="w-full h-5 rounded-xl duration-300"><div class="relative h-full rounded-xl" style="${ssrRenderStyle(`width: ${$props.percentage}%; background-image: var(--primary-gradient);`)}"><span class="absolute -right-3 -top-full duration-300">${ssrInterpolate($props.percentage)}% </span></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressBar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$a = {
  __name: "SkillCard",
  __ssrInlineRender: true,
  props: ["skill", "image"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-80 h-full p-5 rounded-lg border bg-light-primary border-b-light dark:bg-dark-primary dark:border-b-dark shadow-md backdrop-blur duration-300 hover:!-translate-y-4",
        "data-aos": "fade-up"
      }, _attrs))}><div class="w-full p-3 flex flex-col items-center"><div class="w-14 h-14 bg-blue-400 rounded flex justify-center items-center p-3"><div class="w-full h-full bg-cover bg-center duration-300" style="${ssrRenderStyle(`background-image: url('/img/skill/${__props.image}-${_ctx.$colorMode.preference}.png');`)}"></div></div><h2 class="text-lg font-bold font-monteserrat mt-5 text-primary uppercase text-center">${ssrInterpolate(__props.skill)}</h2><p class="text-center font-monteserrat-alt mt-3 duration-300 text-black dark:text-white">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillCard.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2$3 = _sfc_main$a;
const _sfc_main$9 = {
  name: "ExperienceSection",
  computed: {
    bgColor() {
      return useColorMode().value === "dark" ? "1f2937ab" : "f5f8ffb9";
    }
  },
  data() {
    return {
      experience: (/* @__PURE__ */ new Date()).getFullYear() - 2021
    };
  },
  methods: {
    numberToWord(number) {
      return numberToWords.toWords(number);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_heading = __nuxt_component_0$1;
  const _component_progress_bar = __nuxt_component_1$1;
  const _component_skill_card = __nuxt_component_2$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "snap-start bg-cover bg-left-bottom duration-300 flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_main_heading, {
    "main-heading": "Experience",
    "sub-heading": "What Can I Do ",
    "last-symbol": "?"
  }, null, _parent));
  _push(`<div class="flex flex-1 flex-wrap"><div class="w-full lg:w-1/2 px-3 md:px-10 xl:px-24 text-black dark:text-white" data-aos="fade-up"><h3 class="text-[24px] font-bold mb-3 font-monteserrat-alt"> Crafting Digital Experiences: ${ssrInterpolate($data.experience)} Years of Web Wizardry </h3><p class="mb-3 font-monteserrat-alt"><span class="text-2xl font-bold text-primary">W</span>ith two captivating years of journeying through the digital landscape, I&#39;ve sculpted my mark as a web magician. From mastering the fundamental intricacies of web development to conjuring captivating user interfaces with Laravel, Vue.js, Tailwind, and Bootstrap, my passion for pixel-perfect code runs deep. I&#39;ve danced with databases, both relational (MySQL) and NoSQL (MongoDB), orchestrating data with finesse. </p><p class="mb-3 font-monteserrat-alt"> Yet, my skills stretch beyond the web horizon. I&#39;ve donned my mobile sorcerer&#39;s hat, diving into the realm of React Native for crafting enchanting mobile applications. My journey is a tapestry of creativity and innovation, where every line of code tells a story. Join me on this spellbinding journey as we transform ideas into digital dreams. </p></div><div class="w-full lg:w-1/2 px-3 md:px-10 flex items-center mt-4 lg:mt-0"><div class="w-full px-5 pt-5 pb-10 border border-b-light dark:border-b-dark rounded-lg bg-gray backdrop-blur shadow-md duration-300" style="${ssrRenderStyle(`background-color: #${$options.bgColor}`)}" data-aos="fade-left"><div class="flex flex-col"><h3 class="uppercase self-center text-xl font-bold font-monteserrat underline-primary duration-300 dark:text-white"> My Proficiencies </h3></div>`);
  _push(ssrRenderComponent(_component_progress_bar, {
    name: "HTML & CSS",
    percentage: "96"
  }, null, _parent));
  _push(ssrRenderComponent(_component_progress_bar, {
    name: "Javascript",
    percentage: "80"
  }, null, _parent));
  _push(ssrRenderComponent(_component_progress_bar, {
    name: "Nuxt JS",
    percentage: "77"
  }, null, _parent));
  _push(ssrRenderComponent(_component_progress_bar, {
    name: "Laravel",
    percentage: "78"
  }, null, _parent));
  _push(ssrRenderComponent(_component_progress_bar, {
    name: "Databases",
    percentage: "93"
  }, null, _parent));
  _push(ssrRenderComponent(_component_progress_bar, {
    name: "SEO",
    percentage: "54"
  }, null, _parent));
  _push(`</div></div></div><div class="flex flex-1 justify-center flex-wrap gap-8 mt-14">`);
  _push(ssrRenderComponent(_component_skill_card, {
    skill: "Crafting User Experiences",
    image: "frontend"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Experience the art of web basics and the power of Vue.js, where creativity meets functionality to build engaging and dynamic web interfaces. `);
      } else {
        return [
          createTextVNode(" Experience the art of web basics and the power of Vue.js, where creativity meets functionality to build engaging and dynamic web interfaces. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_skill_card, {
    skill: "Building the Digital Backbone",
    image: "backend"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Leverage the robustness of Laravel and Django to create efficient and scalable backend solutions that drive your web applications forward. `);
      } else {
        return [
          createTextVNode(" Leverage the robustness of Laravel and Django to create efficient and scalable backend solutions that drive your web applications forward. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_skill_card, {
    skill: "Data Design Mastery Unleashed",
    image: "database"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Molding data with finesse using MySQL and NoSQL databases, ensuring your applications store and retrieve information seamlessly. `);
      } else {
        return [
          createTextVNode(" Molding data with finesse using MySQL and NoSQL databases, ensuring your applications store and retrieve information seamlessly. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_skill_card, {
    skill: "Navigating the Mobile Realm",
    image: "mobile"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Embark on an exciting mobile journey with Flutter and the React Native. Transform your ideas into captivating cross-platform apps that deeply engage and connect users. `);
      } else {
        return [
          createTextVNode(" Embark on an exciting mobile journey with Flutter and the React Native. Transform your ideas into captivating cross-platform apps that deeply engage and connect users. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_skill_card, {
    skill: "Bridging the Digital Divide",
    image: "desktop"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Unleash the potential of Java Swing and Electron JS to develop desktop applications that bring user-friendly experiences to the desktop environment. `);
      } else {
        return [
          createTextVNode(" Unleash the potential of Java Swing and Electron JS to develop desktop applications that bring user-friendly experiences to the desktop environment. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_skill_card, {
    skill: "Embracing Lifelong Learning Ahead",
    image: "progress"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` As the tech landscape evolves, I&#39;m committed to continuous learning, exploring emerging technologies, and staying ahead in this ever-changing field. `);
      } else {
        return [
          createTextVNode(" As the tech landscape evolves, I'm committed to continuous learning, exploring emerging technologies, and staying ahead in this ever-changing field. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Experience.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {
  name: "ProjectCard",
  props: {
    title: String,
    reference: String,
    technologies: Array,
    button: {
      type: String,
      default: "Learn More"
    },
    image: String,
    disabled: {
      Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "card w-96 flex flex-col bg-light-primary dark:bg-dark-primary border-b-light dark:border-b-dark border rounded-lg shadow-md backdrop-blur duration-300 hover:shadow-xl",
    "data-aos": "fade-up"
  }, _attrs))} data-v-d7df4aef><div class="w-100 h-60 rounded overflow-hidden" data-v-d7df4aef><img${ssrRenderAttr("src", `/img/projects/${$props.image}`)} class="duration-300 object-cover" data-v-d7df4aef></div><div class="w-100 p-4 text-black dark:text-white" data-v-d7df4aef><h2 class="text-xl font-bold font-monteserrat" data-v-d7df4aef>${ssrInterpolate($props.title)}</h2><div class="flex flex-wrap gap-3" data-v-d7df4aef><!--[-->`);
  ssrRenderList($props.technologies, (technology) => {
    _push(`<span class="text-sm font-bold px-2 py-1 bg-blue-400 rounded" data-v-d7df4aef>${ssrInterpolate(technology)}</span>`);
  });
  _push(`<!--]--></div><div class="font-monteserrat-alt my-3" data-v-d7df4aef>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="w-100 flex justify-center mt-7" data-v-d7df4aef><a${ssrRenderAttr("href", $props.reference)} class="${ssrRenderClass([{
    "opacity-60 hover:transform-none !cursor-grab": $props.disabled
  }, "px-4 py-2 rounded duration-300 shadow-md bg-gray-800 text-white dark:bg-gray-900 dark:text-slate-100 hover:shadow-lg hover:-translate-y-2 cursor-pointer"])}" data-v-d7df4aef>${ssrInterpolate($props.button)}</a></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-d7df4aef"]]);
const _imports_0 = "" + publicAssetsURL("img/portfolio-man.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_main_heading = __nuxt_component_0$1;
  const _component_primary_button = __nuxt_component_2$4;
  const _component_project_card = __nuxt_component_2$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "snap-start bg-cover bg-left-bottom duration-300 flex flex-col" }, _attrs))} data-v-19d089fa>`);
  _push(ssrRenderComponent(_component_main_heading, {
    "main-heading": "Portfolio",
    "sub-heading": "What Have I Done ",
    "last-symbol": "?"
  }, null, _parent));
  _push(`<div class="flex flex-wrap" data-v-19d089fa><div class="w-full lg:w-1/2 px-4 md:px-10 lg:px-16 order-2 lg:order-1 duration-300 text-black dark:text-white" data-aos="fade-right" data-v-19d089fa><p class="font-monteserrat-alt" data-v-19d089fa><span class="text-2xl font-bold text-primary" data-v-19d089fa>M</span>y digital journey spans across the vast spectrum of technology, where I&#39;ve sculpted innovation into every project. With a rich tapestry of experience in web development, cross-platform mobile applications, and desktop solutions, I&#39;ve transformed ideas into reality. </p><p class="mt-3 underline-primary font-monteserrat-alt" data-v-19d089fa> The diversity of my portfolio speaks for itself. It encompasses web solutions that gracefully traverse screens, mobile applications that engage users on multiple platforms, and desktop applications built for intuitive experiences. These projects embody the fusion of code and creativity, resulting in solutions that transcend the ordinary. </p><p class="mt-5 italic font-monteserrat-alt" data-v-19d089fa> You&#39;re invited to explore my ever-growing repository of digital creations, each one a unique testament to the art of software development. Join me on this voyage of innovation, where technology and imagination converge to shape the digital world. </p><div class="w-full flex justify-center" data-v-19d089fa>`);
  _push(ssrRenderComponent(_component_primary_button, {
    text: "Visit My Github",
    class: "mt-5"
  }, null, _parent));
  _push(`</div></div><div class="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2" data-aos="fade-left" data-v-19d089fa><img${ssrRenderAttr("src", _imports_0)} class="w-2/3 primary-bounce" data-v-19d089fa></div></div><div class="flex flex-wrap justify-center mt-20 px-5 gap-10" data-v-19d089fa>`);
  _push(ssrRenderComponent(_component_project_card, {
    title: "Student Management System",
    technologies: ["HTML/ CSS", "Laravel", "MYSQL"],
    reference: "https://github.com/TharinduNimesh/online-student-management-system",
    button: "View In Github",
    image: "student-management-system.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-19d089fa${_scopeId}> Created Online Student Management System in response to pandemic disruptions, enabling seamless interaction for admins, teachers, students, and officers. </p>`);
      } else {
        return [
          createVNode("p", null, " Created Online Student Management System in response to pandemic disruptions, enabling seamless interaction for admins, teachers, students, and officers. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_project_card, {
    title: "Employee Management System",
    technologies: ["C#", ".NET", "MYSQL"],
    reference: "https://github.com/TharinduNimesh/employee-management-system",
    button: "View In Github",
    image: "employee-management-system.jpg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-19d089fa${_scopeId}> Designed and developed an Employee Management System using C# and .NET for efficient workforce management and record-keeping. </p>`);
      } else {
        return [
          createVNode("p", null, " Designed and developed an Employee Management System using C# and .NET for efficient workforce management and record-keeping. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_project_card, {
    title: "Chatterbox",
    technologies: ["React Native", "Laravel", "MYSQL"],
    button: "Available Soon",
    image: "chatterbox.jpg",
    disabled: "true"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-19d089fa${_scopeId}> Crafted Chatterbox, a social media app with React Native and laravel backend, fostering connections and conversations across platforms. </p>`);
      } else {
        return [
          createVNode("p", null, " Crafted Chatterbox, a social media app with React Native and laravel backend, fostering connections and conversations across platforms. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Portfolio.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-19d089fa"]]);
const _sfc_main$6 = {
  name: "BlogCard",
  props: ["publishedAt", "title", "image"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_primary_button = __nuxt_component_2$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "root relative w-full bg-light-primary dark:bg-dark-primary border border-b-light dark:border-b-dark md:w-11/12 lg:w-4/5 flex justify-center lg:flex-col lg:mt-0 py-5 lg:h-80 rounded-lg mt-20 lg:left-6 shadow-md duration-300 backdrop-blur-md hover:shadow-lg hover:-translate-y-2",
    "data-aos": "fade-up"
  }, _attrs))} data-v-803852b6><div class="-top-20 absolute w-3/4 md:w-1/2 h-60 lg:top-10 lg:w-2/5 xl:w-1/4 lg:-left-12 rounded-lg" data-v-803852b6><img${ssrRenderAttr("src", `/img/blogs/${$props.image}`)} alt="blog image" class="w-full h-full object-cover rounded-lg duration-300 blog-img" data-v-803852b6></div><div class="flex flex-col mt-44 lg:mt-0 px-7 text-center content lg:text-left" data-v-803852b6><div data-v-803852b6><p class="font-bold text-gray-500" data-v-803852b6>${ssrInterpolate($props.publishedAt)}</p><h2 class="text-xl font-bold font-monteserrat duration-300 text-black dark:text-white" data-v-803852b6>${ssrInterpolate($props.title)}</h2><p class="font-monteserrat-alt mt-2 duration-300 text-gray-600 dark:text-gray-400" data-v-803852b6>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<span class="text-primary text-lg font-bold" data-v-803852b6>...</span></p><div class="flex justify-center mt-5" data-v-803852b6>`);
  _push(ssrRenderComponent(_component_primary_button, {
    text: "Read More",
    class: "lg:mt-5"
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-803852b6"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_main_heading = __nuxt_component_0$1;
  const _component_blog_card = __nuxt_component_1;
  const _component_primary_button = __nuxt_component_2$4;
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_main_heading, {
    "main-heading": "Insights",
    "sub-heading": "My Articles",
    "last-symbol": "."
  }, null, _parent));
  _push(`<div class="flex flex-col gap-y-7 items-center px-5 lg:px-10">`);
  _push(ssrRenderComponent(_component_blog_card, {
    title: "How To Get Started In Web Development",
    image: "blog-3.jpg",
    "published-at": "03 October 2023"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Are you interested in the exciting world of web development but don&#39;t know where to begin? You&#39;re not alone. Many aspiring developers `);
      } else {
        return [
          createTextVNode(" Are you interested in the exciting world of web development but don't know where to begin? You're not alone. Many aspiring developers ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_blog_card, {
    title: "Why Your Business Should Have A Website",
    image: "blog-2.avif",
    "published-at": "18 September 2023"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` In today&#39;s digital age, having a strong online presence is not just an option; it&#39;s a necessity for businesses of all sizes. In this blog post `);
      } else {
        return [
          createTextVNode(" In today's digital age, having a strong online presence is not just an option; it's a necessity for businesses of all sizes. In this blog post ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_blog_card, {
    title: "My Experience In Software Engineering",
    image: "blog-1.png",
    "published-at": "13 September 2023"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` As a first-year software engineering student at JIAT (Java Institute For Advanced Technology), I embarked on this `);
      } else {
        return [
          createTextVNode(" As a first-year software engineering student at JIAT (Java Institute For Advanced Technology), I embarked on this ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full flex justify-center mt-5">`);
  _push(ssrRenderComponent(_component_primary_button, { text: "Visit My Blog" }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/Blog.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_section_hero = __nuxt_component_0$2;
  const _component_section_about = __nuxt_component_1$2;
  const _component_section_experience = __nuxt_component_2$2;
  const _component_section_portfolio = __nuxt_component_3$1;
  const _component_section_blog = __nuxt_component_4$1;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_section_hero, null, null, _parent));
  _push(ssrRenderComponent(_component_section_about, null, null, _parent));
  _push(ssrRenderComponent(_component_section_experience, null, null, _parent));
  _push(ssrRenderComponent(_component_section_portfolio, null, null, _parent));
  _push(ssrRenderComponent(_component_section_blog, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  props: ["name", "link"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$6;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: $props.link,
    class: "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 duration-300 cursor-pointer"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.name)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  data() {
    return {
      year: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_footer_item = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "lg:p-2" }, _attrs))}><div class="background text-gray-600 dark:text-gray-400 rounded-t-lg lg:rounded-lg border border-b-light dark:border-b-dark w-full flex flex-col bg-cover bg-center px-5" style="${ssrRenderStyle(`background-image: url('/img/footer-bg-${_ctx.$colorMode.preference}.webp')`)}"><div class="w-full flex flex-col lg:flex-row items-center px-5 py-8 gap-y-4"><div class="w-full flex flex-col items-center gap-2 order-1 lg:order-2"><img${ssrRenderAttr("src", _imports_0$2)} class="w-14 h-14 object-cover"><div class="w-full max-w-[400px]"><p class="text-center"> I&#39;m Tharindu Nimesh, a passionate student at the Java Institute For Advanced Technology (JIAT) based in Sri Lanka. My tech journey has been an exciting adventure, driven by my fascination with web development, especially backend work. </p></div></div><div class="w-full flex flex-col items-center gap-2 order-2 lg:order-1"><h3 class="text-2xl font-bold text-center uppercase">My Services</h3><div class="flex flex-col text-center">`);
  _push(ssrRenderComponent(_component_footer_item, {
    name: "Web Development",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "Mobile Development",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "UI/ UX Designing",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "Database Designing",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "SEO Optimizing",
    link: "/"
  }, null, _parent));
  _push(`</div></div><div class="w-full flex flex-col items-center gap-2 order-3"><h3 class="text-2xl font-bold text-center uppercase">My Articles</h3><div class="flex flex-col text-center">`);
  _push(ssrRenderComponent(_component_footer_item, {
    name: "Features Of Nuxt JS",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "New JS Runtime | BUN",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "Get Started With Laravel",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "Project Management tips...",
    link: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_footer_item, {
    name: "First Year in software...",
    link: "/"
  }, null, _parent));
  _push(`</div></div></div><div class="w-full flex flex-col lg:flex-row text-center lg:text-right lg:justify-between py-2 border-t border-gray-400 dark:border-b-dark"><p> Design And Developed By <span class="font-bold">Tharindu Nimesh</span>. </p><p> \xA9 Copyright ${ssrInterpolate($data.year)} <span class="font-bold">Tharindu Nimesh</span>. Alright Reserved. </p></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "ToggleTheme",
  __ssrInlineRender: true,
  setup(__props) {
    useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed shadow-md bg-slate-200 dark:bg-slate-900" }, _attrs))} data-v-3c5fe4ce><div class="toggle cursor-pointer" data-v-3c5fe4ce><div class="${ssrRenderClass(`img w-full h-full duration-300 ${_ctx.$colorMode.preference}`)}" data-v-3c5fe4ce></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToggleTheme.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3c5fe4ce"]]);
const __default__ = {
  name: "App",
  data() {
    return {
      isLoading: true,
      headerBackground: false
    };
  },
  mounted() {
    this.isLoading = false;
    window.addEventListener("scroll", this.setHeaderBackground);
  },
  methods: {
    setHeaderBackground(e) {
      this.headerBackground = window.scrollY > 100 ? true : false;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Tharindu Nimesh | Web Developer",
      meta: [
        {
          name: "keywords",
          content: "Tharindu, Nimesh, Tharindu Nimesh, Web Developer, Software Engineer, Sri Lanka, Tharindu Nimesh Dewinda, Dewinda, Sri Dharmaloka"
        },
        {
          name: "description",
          content: "Tharindu Nimesh is a passionate software engineering student at the Java Institute For Advanced Technology (JIAT) based in Sri Lanka"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loading_screen = __nuxt_component_0$5;
      const _component_home_header = __nuxt_component_1$4;
      const _component_home_page = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      const _component_toggle_theme = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-default duration-300 bg-slate-100 dark:bg-gray-950" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_loading_screen, { "is-loading": _ctx.isLoading }, null, _parent));
      _push(ssrRenderComponent(_component_home_header, { "show-background": _ctx.headerBackground }, null, _parent));
      _push(`<div class="bg-repeat-y lg:bg-contain duration-300" style="${ssrRenderStyle(`background-image: url(/img/${_ctx.$colorMode.preference}-bg.webp);`)}">`);
      _push(ssrRenderComponent(_component_home_page, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_toggle_theme, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0c9acfb8.mjs.map
