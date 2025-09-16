import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Pipe,
  Subject,
  concat,
  concatMap,
  defer,
  forkJoin,
  inject,
  isObservable,
  map,
  of,
  setClassMetadata,
  shareReplay,
  switchMap,
  take,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵgetInheritedFactory
} from "./chunk-QUKQKOAK.js";
import {
  __name,
  __publicField,
  __spreadValues
} from "./chunk-TJFVSI2U.js";

// node_modules/@ngx-translate/core/fesm2022/ngx-translate-core.mjs
function _(key) {
  return key;
}
__name(_, "_");
var _MissingTranslationHandler = class _MissingTranslationHandler {
};
__name(_MissingTranslationHandler, "MissingTranslationHandler");
var MissingTranslationHandler = _MissingTranslationHandler;
var _DefaultMissingTranslationHandler = class _DefaultMissingTranslationHandler {
  handle(params) {
    return params.key;
  }
};
__name(_DefaultMissingTranslationHandler, "DefaultMissingTranslationHandler");
__publicField(_DefaultMissingTranslationHandler, "ɵfac", /* @__PURE__ */ __name(function DefaultMissingTranslationHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultMissingTranslationHandler)();
}, "DefaultMissingTranslationHandler_Factory"));
__publicField(_DefaultMissingTranslationHandler, "ɵprov", ɵɵdefineInjectable({
  token: _DefaultMissingTranslationHandler,
  factory: _DefaultMissingTranslationHandler.ɵfac
}));
var DefaultMissingTranslationHandler = _DefaultMissingTranslationHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMissingTranslationHandler, [{
    type: Injectable
  }], null, null);
})();
var _TranslateCompiler = class _TranslateCompiler {
};
__name(_TranslateCompiler, "TranslateCompiler");
var TranslateCompiler = _TranslateCompiler;
var _TranslateNoOpCompiler = class _TranslateNoOpCompiler extends TranslateCompiler {
  compile(value, lang) {
    void lang;
    return value;
  }
  compileTranslations(translations, lang) {
    void lang;
    return translations;
  }
};
__name(_TranslateNoOpCompiler, "TranslateNoOpCompiler");
__publicField(_TranslateNoOpCompiler, "ɵfac", /* @__PURE__ */ (() => {
  let ɵTranslateNoOpCompiler_BaseFactory;
  return /* @__PURE__ */ __name(function TranslateNoOpCompiler_Factory(__ngFactoryType__) {
    return (ɵTranslateNoOpCompiler_BaseFactory || (ɵTranslateNoOpCompiler_BaseFactory = ɵɵgetInheritedFactory(_TranslateNoOpCompiler)))(__ngFactoryType__ || _TranslateNoOpCompiler);
  }, "TranslateNoOpCompiler_Factory");
})());
__publicField(_TranslateNoOpCompiler, "ɵprov", ɵɵdefineInjectable({
  token: _TranslateNoOpCompiler,
  factory: _TranslateNoOpCompiler.ɵfac
}));
var TranslateNoOpCompiler = _TranslateNoOpCompiler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpCompiler, [{
    type: Injectable
  }], null, null);
})();
var _TranslateLoader = class _TranslateLoader {
};
__name(_TranslateLoader, "TranslateLoader");
var TranslateLoader = _TranslateLoader;
var _TranslateNoOpLoader = class _TranslateNoOpLoader extends TranslateLoader {
  getTranslation(lang) {
    void lang;
    return of({});
  }
};
__name(_TranslateNoOpLoader, "TranslateNoOpLoader");
__publicField(_TranslateNoOpLoader, "ɵfac", /* @__PURE__ */ (() => {
  let ɵTranslateNoOpLoader_BaseFactory;
  return /* @__PURE__ */ __name(function TranslateNoOpLoader_Factory(__ngFactoryType__) {
    return (ɵTranslateNoOpLoader_BaseFactory || (ɵTranslateNoOpLoader_BaseFactory = ɵɵgetInheritedFactory(_TranslateNoOpLoader)))(__ngFactoryType__ || _TranslateNoOpLoader);
  }, "TranslateNoOpLoader_Factory");
})());
__publicField(_TranslateNoOpLoader, "ɵprov", ɵɵdefineInjectable({
  token: _TranslateNoOpLoader,
  factory: _TranslateNoOpLoader.ɵfac
}));
var TranslateNoOpLoader = _TranslateNoOpLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpLoader, [{
    type: Injectable
  }], null, null);
})();
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true;
  const t1 = typeof o1, t2 = typeof o2;
  let length;
  if (t1 == t2 && t1 == "object") {
    if (Array.isArray(o1)) {
      if (!Array.isArray(o2)) return false;
      if ((length = o1.length) == o2.length) {
        for (let key = 0; key < length; key++) {
          if (!equals(o1[key], o2[key])) return false;
        }
        return true;
      }
    } else {
      if (Array.isArray(o2)) {
        return false;
      }
      if (isDict(o1) && isDict(o2)) {
        const keySet = /* @__PURE__ */ Object.create(null);
        for (const key in o1) {
          if (!equals(o1[key], o2[key])) {
            return false;
          }
          keySet[key] = true;
        }
        for (const key in o2) {
          if (!(key in keySet) && typeof o2[key] !== "undefined") {
            return false;
          }
        }
        return true;
      }
    }
  }
  return false;
}
__name(equals, "equals");
function isDefinedAndNotNull(value) {
  return typeof value !== "undefined" && value !== null;
}
__name(isDefinedAndNotNull, "isDefinedAndNotNull");
function isDefined(value) {
  return value !== void 0;
}
__name(isDefined, "isDefined");
function isDict(value) {
  return isObject(value) && !isArray(value) && value !== null;
}
__name(isDict, "isDict");
function isObject(value) {
  return typeof value === "object" && value !== null;
}
__name(isObject, "isObject");
function isArray(value) {
  return Array.isArray(value);
}
__name(isArray, "isArray");
function isString(value) {
  return typeof value === "string";
}
__name(isString, "isString");
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function cloneDeep(value) {
  if (isArray(value)) {
    return value.map((item) => cloneDeep(item));
  } else if (isDict(value)) {
    const cloned = {};
    Object.keys(value).forEach((key) => {
      cloned[key] = cloneDeep(value[key]);
    });
    return cloned;
  } else {
    return value;
  }
}
__name(cloneDeep, "cloneDeep");
function mergeDeep(target, source) {
  if (!isObject(target)) {
    return cloneDeep(source);
  }
  const output = cloneDeep(target);
  if (isObject(output) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isDict(source[key])) {
        if (key in target) {
          output[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, {
            [key]: source[key]
          });
        }
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }
  return output;
}
__name(mergeDeep, "mergeDeep");
function getValue(target, key) {
  const keys = key.split(".");
  key = "";
  do {
    key += keys.shift();
    const isLastKey = !keys.length;
    if (isDefinedAndNotNull(target)) {
      if (isDict(target) && isDefined(target[key]) && (isDict(target[key]) || isArray(target[key]) || isLastKey)) {
        target = target[key];
        key = "";
        continue;
      }
      if (isArray(target)) {
        const index = parseInt(key, 10);
        if (isDefined(target[index]) && (isDict(target[index]) || isArray(target[index]) || isLastKey)) {
          target = target[index];
          key = "";
          continue;
        }
      }
    }
    if (isLastKey) {
      target = void 0;
      continue;
    }
    key += ".";
  } while (keys.length);
  return target;
}
__name(getValue, "getValue");
function setValue(target, key, value) {
  const keys = key.split(".");
  let current = target;
  for (let i = 0; i < keys.length; i++) {
    const key2 = keys[i];
    if (i === keys.length - 1) {
      current[key2] = value;
    } else {
      current = current[key2] && isDict(current[key2]) ? current[key2] : {};
    }
  }
}
__name(setValue, "setValue");
function insertValue(target, key, value) {
  return mergeDeep(target, createNestedObject(key, value));
}
__name(insertValue, "insertValue");
function createNestedObject(dotSeparatedKey, value) {
  return dotSeparatedKey.split(".").reduceRight((acc, key) => ({
    [key]: acc
  }), value);
}
__name(createNestedObject, "createNestedObject");
var _TranslateParser = class _TranslateParser {
};
__name(_TranslateParser, "TranslateParser");
var TranslateParser = _TranslateParser;
var _TranslateDefaultParser = class _TranslateDefaultParser extends TranslateParser {
  templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  interpolate(expr, params) {
    if (isString(expr)) {
      return this.interpolateString(expr, params);
    } else if (isFunction(expr)) {
      return this.interpolateFunction(expr, params);
    }
    return void 0;
  }
  interpolateFunction(fn, params) {
    return fn(params);
  }
  interpolateString(expr, params) {
    if (!params) {
      return expr;
    }
    return expr.replace(this.templateMatcher, (substring, key) => {
      const replacement = this.getInterpolationReplacement(params, key);
      return replacement !== void 0 ? replacement : substring;
    });
  }
  /**
   * Returns the replacement for an interpolation parameter
   * @params:
   */
  getInterpolationReplacement(params, key) {
    return this.formatValue(getValue(params, key));
  }
  /**
   * Converts a value into a useful string representation.
   * @param value The value to format.
   * @returns A string representation of the value.
   */
  formatValue(value) {
    if (isString(value)) {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return value.toString();
    }
    if (value === null) {
      return "null";
    }
    if (isArray(value)) {
      return value.join(", ");
    }
    if (isObject(value)) {
      if (typeof value.toString === "function" && value.toString !== Object.prototype.toString) {
        return value.toString();
      }
      return JSON.stringify(value);
    }
    return void 0;
  }
};
__name(_TranslateDefaultParser, "TranslateDefaultParser");
__publicField(_TranslateDefaultParser, "ɵfac", /* @__PURE__ */ (() => {
  let ɵTranslateDefaultParser_BaseFactory;
  return /* @__PURE__ */ __name(function TranslateDefaultParser_Factory(__ngFactoryType__) {
    return (ɵTranslateDefaultParser_BaseFactory || (ɵTranslateDefaultParser_BaseFactory = ɵɵgetInheritedFactory(_TranslateDefaultParser)))(__ngFactoryType__ || _TranslateDefaultParser);
  }, "TranslateDefaultParser_Factory");
})());
__publicField(_TranslateDefaultParser, "ɵprov", ɵɵdefineInjectable({
  token: _TranslateDefaultParser,
  factory: _TranslateDefaultParser.ɵfac
}));
var TranslateDefaultParser = _TranslateDefaultParser;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDefaultParser, [{
    type: Injectable
  }], null, null);
})();
var _TranslateStore = class _TranslateStore {
  _onTranslationChange = new Subject();
  _onLangChange = new Subject();
  _onFallbackLangChange = new Subject();
  fallbackLang = null;
  currentLang;
  translations = {};
  languages = [];
  getTranslations(language) {
    return this.translations[language];
  }
  setTranslations(language, translations, extend) {
    this.translations[language] = extend && this.hasTranslationFor(language) ? mergeDeep(this.translations[language], translations) : translations;
    this.addLanguages([language]);
    this._onTranslationChange.next({
      lang: language,
      translations: this.getTranslations(language)
    });
  }
  getLanguages() {
    return this.languages;
  }
  getCurrentLang() {
    return this.currentLang;
  }
  getFallbackLang() {
    return this.fallbackLang;
  }
  /**
   * Changes the fallback lang
   */
  setFallbackLang(lang, emitChange = true) {
    this.fallbackLang = lang;
    if (emitChange) {
      this._onFallbackLangChange.next({
        lang,
        translations: this.translations[lang]
      });
    }
  }
  setCurrentLang(lang, emitChange = true) {
    this.currentLang = lang;
    if (emitChange) {
      this._onLangChange.next({
        lang,
        translations: this.translations[lang]
      });
    }
  }
  /**
   * An Observable to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
   *     // do something
   * });
   */
  get onTranslationChange() {
    return this._onTranslationChange.asObservable();
  }
  /**
   * An Observable to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
   *     // do something
   * });
   */
  get onLangChange() {
    return this._onLangChange.asObservable();
  }
  /**
   * An Observable to listen to fallback lang change events
   * onFallbackLangChange.subscribe((params: FallbackLangChangeEvent) => {
   *     // do something
   * });
   */
  get onFallbackLangChange() {
    return this._onFallbackLangChange.asObservable();
  }
  addLanguages(languages) {
    this.languages = Array.from(/* @__PURE__ */ new Set([...this.languages, ...languages]));
  }
  hasTranslationFor(lang) {
    return typeof this.translations[lang] !== "undefined";
  }
  deleteTranslations(lang) {
    delete this.translations[lang];
  }
  getTranslation(key) {
    let text = this.getValue(this.currentLang, key);
    if (text === void 0 && this.fallbackLang != null && this.fallbackLang !== this.currentLang) {
      text = this.getValue(this.fallbackLang, key);
    }
    return text;
  }
  getValue(language, key) {
    return getValue(this.getTranslations(language), key);
  }
};
__name(_TranslateStore, "TranslateStore");
__publicField(_TranslateStore, "ɵfac", /* @__PURE__ */ __name(function TranslateStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslateStore)();
}, "TranslateStore_Factory"));
__publicField(_TranslateStore, "ɵprov", ɵɵdefineInjectable({
  token: _TranslateStore,
  factory: _TranslateStore.ɵfac
}));
var TranslateStore = _TranslateStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateStore, [{
    type: Injectable
  }], null, null);
})();
var TRANSLATE_SERVICE_CONFIG = new InjectionToken("TRANSLATE_CONFIG");
var makeObservable = /* @__PURE__ */ __name((value) => {
  return isObservable(value) ? value : of(value);
}, "makeObservable");
var _ITranslateService = class _ITranslateService {
};
__name(_ITranslateService, "ITranslateService");
var ITranslateService = _ITranslateService;
var _TranslateService = class _TranslateService {
  loadingTranslations;
  pending = false;
  _translationRequests = {};
  lastUseLanguage = null;
  currentLoader = inject(TranslateLoader);
  compiler = inject(TranslateCompiler);
  parser = inject(TranslateParser);
  missingTranslationHandler = inject(MissingTranslationHandler);
  store = inject(TranslateStore);
  extend = false;
  /**
   * An Observable to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
   *     // do something
   * });
   */
  get onTranslationChange() {
    return this.store.onTranslationChange;
  }
  /**
   * An Observable to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
   *     // do something
   * });
   */
  get onLangChange() {
    return this.store.onLangChange;
  }
  /**
   * An Observable to listen to fallback lang change events
   * onFallbackLangChange.subscribe((params: FallbackLangChangeEvent) => {
   *     // do something
   * });
   */
  get onFallbackLangChange() {
    return this.store.onFallbackLangChange;
  }
  /**
   * @deprecated Use onFallbackLangChange() instead
   */
  get onDefaultLangChange() {
    return this.store.onFallbackLangChange;
  }
  constructor() {
    const config = __spreadValues({
      extend: false,
      fallbackLang: null
    }, inject(TRANSLATE_SERVICE_CONFIG, {
      optional: true
    }));
    if (config.lang) {
      this.use(config.lang);
    }
    if (config.fallbackLang) {
      this.setFallbackLang(config.fallbackLang);
    }
    if (config.extend) {
      this.extend = true;
    }
  }
  /**
   * Sets the fallback language to use if a translation is not found in the
   * current language
   */
  setFallbackLang(lang) {
    if (!this.getFallbackLang()) {
      this.store.setFallbackLang(lang, false);
    }
    const pending = this.loadOrExtendLanguage(lang);
    if (isObservable(pending)) {
      pending.pipe(take(1)).subscribe({
        next: /* @__PURE__ */ __name(() => {
          this.store.setFallbackLang(lang);
        }, "next"),
        error: /* @__PURE__ */ __name(() => {
        }, "error")
      });
      return pending;
    }
    this.store.setFallbackLang(lang);
    return of(this.store.getTranslations(lang));
  }
  /**
   * Changes the lang currently used
   */
  use(lang) {
    this.lastUseLanguage = lang;
    if (!this.getCurrentLang()) {
      this.store.setCurrentLang(lang, false);
    }
    const pending = this.loadOrExtendLanguage(lang);
    if (isObservable(pending)) {
      pending.pipe(take(1)).subscribe({
        next: /* @__PURE__ */ __name(() => {
          this.changeLang(lang);
        }, "next"),
        error: /* @__PURE__ */ __name(() => {
        }, "error")
      });
      return pending;
    }
    this.changeLang(lang);
    return of(this.store.getTranslations(lang));
  }
  /**
   * Retrieves the given translations
   */
  loadOrExtendLanguage(lang) {
    if (!this.store.hasTranslationFor(lang) || this.extend) {
      this._translationRequests[lang] = this._translationRequests[lang] || this.loadAndCompileTranslations(lang);
      return this._translationRequests[lang];
    }
    return void 0;
  }
  /**
   * Changes the current lang
   */
  changeLang(lang) {
    if (lang !== this.lastUseLanguage) {
      return;
    }
    this.store.setCurrentLang(lang);
  }
  getCurrentLang() {
    return this.store.getCurrentLang();
  }
  loadAndCompileTranslations(lang) {
    this.pending = true;
    const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(shareReplay(1), take(1));
    this.loadingTranslations = loadingTranslations.pipe(map((res) => this.compiler.compileTranslations(res, lang)), shareReplay(1), take(1));
    this.loadingTranslations.subscribe({
      next: /* @__PURE__ */ __name((res) => {
        this.store.setTranslations(lang, res, this.extend);
        this.pending = false;
      }, "next"),
      error: /* @__PURE__ */ __name((err) => {
        void err;
        this.pending = false;
      }, "error")
    });
    return loadingTranslations;
  }
  /**
   * Manually sets an object of translations for a given language
   * after passing it through the compiler
   */
  setTranslation(lang, translations, shouldMerge = false) {
    const interpolatableTranslations = this.compiler.compileTranslations(translations, lang);
    this.store.setTranslations(lang, interpolatableTranslations, shouldMerge || this.extend);
  }
  getLangs() {
    return this.store.getLanguages();
  }
  /**
   * Add available languages
   */
  addLangs(languages) {
    this.store.addLanguages(languages);
  }
  getParsedResultForKey(key, interpolateParams) {
    const textToInterpolate = this.getTextToInterpolate(key);
    if (isDefinedAndNotNull(textToInterpolate)) {
      return this.runInterpolation(textToInterpolate, interpolateParams);
    }
    const res = this.missingTranslationHandler.handle(__spreadValues({
      key,
      translateService: this
    }, interpolateParams !== void 0 && {
      interpolateParams
    }));
    return res !== void 0 ? res : key;
  }
  /**
   * Gets the fallback language. null if none is defined
   */
  getFallbackLang() {
    return this.store.getFallbackLang();
  }
  getTextToInterpolate(key) {
    return this.store.getTranslation(key);
  }
  runInterpolation(translations, interpolateParams) {
    if (!isDefinedAndNotNull(translations)) {
      return;
    }
    if (isArray(translations)) {
      return this.runInterpolationOnArray(translations, interpolateParams);
    }
    if (isDict(translations)) {
      return this.runInterpolationOnDict(translations, interpolateParams);
    }
    return this.parser.interpolate(translations, interpolateParams);
  }
  runInterpolationOnArray(translations, interpolateParams) {
    return translations.map((translation) => this.runInterpolation(translation, interpolateParams));
  }
  runInterpolationOnDict(translations, interpolateParams) {
    const result = {};
    for (const key in translations) {
      const res = this.runInterpolation(translations[key], interpolateParams);
      if (res !== void 0) {
        result[key] = res;
      }
    }
    return result;
  }
  /**
   * Returns the parsed result of the translations
   */
  getParsedResult(key, interpolateParams) {
    return key instanceof Array ? this.getParsedResultForArray(key, interpolateParams) : this.getParsedResultForKey(key, interpolateParams);
  }
  getParsedResultForArray(key, interpolateParams) {
    const result = {};
    let observables = false;
    for (const k of key) {
      result[k] = this.getParsedResultForKey(k, interpolateParams);
      observables = observables || isObservable(result[k]);
    }
    if (!observables) {
      return result;
    }
    const sources = key.map((k) => makeObservable(result[k]));
    return forkJoin(sources).pipe(map((arr) => {
      const obj = {};
      arr.forEach((value, index) => {
        obj[key[index]] = value;
      });
      return obj;
    }));
  }
  /**
   * Gets the translated value of a key (or an array of keys)
   * @returns the translated key, or an object of translated keys
   */
  get(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    if (this.pending) {
      return this.loadingTranslations.pipe(concatMap(() => {
        return makeObservable(this.getParsedResult(key, interpolateParams));
      }));
    }
    return makeObservable(this.getParsedResult(key, interpolateParams));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the translation changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  getStreamOnTranslationChange(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    return concat(defer(() => this.get(key, interpolateParams)), this.onTranslationChange.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the language changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  stream(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    return concat(defer(() => this.get(key, interpolateParams)), this.onLangChange.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a translation instantly from the internal state of loaded translation.
   * All rules regarding the current language, the preferred language of even fallback languages
   * will be used except any promise handling.
   */
  instant(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || key.length === 0) {
      throw new Error('Parameter "key" is required and cannot be empty');
    }
    const result = this.getParsedResult(key, interpolateParams);
    if (isObservable(result)) {
      if (Array.isArray(key)) {
        return key.reduce((acc, currKey) => {
          acc[currKey] = currKey;
          return acc;
        }, {});
      }
      return key;
    }
    return result;
  }
  /**
   * Sets the translated value of a key, after compiling it
   */
  set(key, translation, lang = this.getCurrentLang()) {
    this.store.setTranslations(lang, insertValue(this.store.getTranslations(lang), key, isString(translation) ? this.compiler.compile(translation, lang) : this.compiler.compileTranslations(translation, lang)), false);
  }
  /**
   * Allows reloading the lang file from the file
   */
  reloadLang(lang) {
    this.resetLang(lang);
    return this.loadAndCompileTranslations(lang);
  }
  /**
   * Deletes inner translation
   */
  resetLang(lang) {
    delete this._translationRequests[lang];
    this.store.deleteTranslations(lang);
  }
  /**
   * Returns the language code name from the browser, e.g. "de"
   */
  static getBrowserLang() {
    if (typeof window === "undefined" || !window.navigator) {
      return void 0;
    }
    const browserLang = this.getBrowserCultureLang();
    return browserLang ? browserLang.split(/[-_]/)[0] : void 0;
  }
  /**
   * Returns the culture language code name from the browser, e.g. "de-DE"
   */
  static getBrowserCultureLang() {
    if (typeof window === "undefined" || typeof window.navigator === "undefined") {
      return void 0;
    }
    return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
  }
  getBrowserLang() {
    return _TranslateService.getBrowserLang();
  }
  getBrowserCultureLang() {
    return _TranslateService.getBrowserCultureLang();
  }
  /** Deprecations **/
  /**
   * @deprecated use `getFallbackLang()`
   */
  get defaultLang() {
    return this.getFallbackLang();
  }
  /**
   * The lang currently used
   * @deprecated use `getCurrentLang()`
   */
  get currentLang() {
    return this.store.getCurrentLang();
  }
  /**
   * @deprecated use `getLangs()`
   */
  get langs() {
    return this.store.getLanguages();
  }
  /**
   * Sets the  language to use as a fallback
   * @deprecated use setFallbackLanguage()
   */
  setDefaultLang(lang) {
    return this.setFallbackLang(lang);
  }
  /**
   * Gets the fallback language used
   * @deprecated use getFallbackLang()
   */
  getDefaultLang() {
    return this.getFallbackLang();
  }
};
__name(_TranslateService, "TranslateService");
__publicField(_TranslateService, "ɵfac", /* @__PURE__ */ __name(function TranslateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslateService)();
}, "TranslateService_Factory"));
__publicField(_TranslateService, "ɵprov", ɵɵdefineInjectable({
  token: _TranslateService,
  factory: _TranslateService.ɵfac
}));
var TranslateService = _TranslateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateService, [{
    type: Injectable
  }], () => [], null);
})();
var _TranslateDirective = class _TranslateDirective {
  translateService = inject(TranslateService);
  element = inject(ElementRef);
  _ref = inject(ChangeDetectorRef);
  key;
  lastParams;
  currentParams;
  onLangChangeSub;
  onFallbackLangChangeSub;
  onTranslationChangeSub;
  set translate(key) {
    if (key) {
      this.key = key;
      this.checkNodes();
    }
  }
  set translateParams(params) {
    if (!equals(this.currentParams, params)) {
      this.currentParams = params;
      this.checkNodes(true);
    }
  }
  constructor() {
    if (!this.onTranslationChangeSub) {
      this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((event) => {
        if (event.lang === this.translateService.currentLang) {
          this.checkNodes(true, event.translations);
        }
      });
    }
    if (!this.onLangChangeSub) {
      this.onLangChangeSub = this.translateService.onLangChange.subscribe((event) => {
        this.checkNodes(true, event.translations);
      });
    }
    if (!this.onFallbackLangChangeSub) {
      this.onFallbackLangChangeSub = this.translateService.onFallbackLangChange.subscribe((event) => {
        void event;
        this.checkNodes(true);
      });
    }
  }
  ngAfterViewChecked() {
    this.checkNodes();
  }
  checkNodes(forceUpdate = false, translations) {
    let nodes = this.element.nativeElement.childNodes;
    if (!nodes.length) {
      this.setContent(this.element.nativeElement, this.key);
      nodes = this.element.nativeElement.childNodes;
    }
    nodes.forEach((n) => {
      const node = n;
      if (node.nodeType === 3) {
        let key;
        if (forceUpdate) {
          node.lastKey = null;
        }
        if (isDefinedAndNotNull(node.lookupKey)) {
          key = node.lookupKey;
        } else if (this.key) {
          key = this.key;
        } else {
          const content = this.getContent(node);
          const trimmedContent = content.trim();
          if (trimmedContent.length) {
            node.lookupKey = trimmedContent;
            if (content !== node.currentValue) {
              key = trimmedContent;
              node.originalContent = content || node.originalContent;
            } else if (node.originalContent) {
              key = node.originalContent.trim();
            }
          }
        }
        this.updateValue(key, node, translations);
      }
    });
  }
  updateValue(key, node, translations) {
    if (key) {
      if (node.lastKey === key && this.lastParams === this.currentParams) {
        return;
      }
      this.lastParams = this.currentParams;
      const onTranslation = /* @__PURE__ */ __name((res) => {
        if (res !== key || !node.lastKey) {
          node.lastKey = key;
        }
        if (!node.originalContent) {
          node.originalContent = this.getContent(node);
        }
        if (isString(res)) {
          node.currentValue = res;
        } else if (!isDefinedAndNotNull(res)) {
          node.currentValue = node.originalContent || key;
        } else {
          node.currentValue = JSON.stringify(res);
        }
        this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
        this._ref.markForCheck();
      }, "onTranslation");
      if (isDefinedAndNotNull(translations)) {
        const res = this.translateService.getParsedResult(key, this.currentParams);
        if (isObservable(res)) {
          res.subscribe({
            next: onTranslation
          });
        } else {
          onTranslation(res);
        }
      } else {
        this.translateService.get(key, this.currentParams).subscribe(onTranslation);
      }
    }
  }
  getContent(node) {
    return isDefinedAndNotNull(node.textContent) ? node.textContent : node.data;
  }
  setContent(node, content) {
    if (isDefinedAndNotNull(node.textContent)) {
      node.textContent = content;
    } else {
      node.data = content;
    }
  }
  ngOnDestroy() {
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }
    if (this.onFallbackLangChangeSub) {
      this.onFallbackLangChangeSub.unsubscribe();
    }
    if (this.onTranslationChangeSub) {
      this.onTranslationChangeSub.unsubscribe();
    }
  }
};
__name(_TranslateDirective, "TranslateDirective");
__publicField(_TranslateDirective, "ɵfac", /* @__PURE__ */ __name(function TranslateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslateDirective)();
}, "TranslateDirective_Factory"));
__publicField(_TranslateDirective, "ɵdir", ɵɵdefineDirective({
  type: _TranslateDirective,
  selectors: [["", "translate", ""], ["", "ngx-translate", ""]],
  inputs: {
    translate: "translate",
    translateParams: "translateParams"
  }
}));
var TranslateDirective = _TranslateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[translate],[ngx-translate]",
      standalone: true
    }]
  }], () => [], {
    translate: [{
      type: Input
    }],
    translateParams: [{
      type: Input
    }]
  });
})();
var _TranslatePipe = class _TranslatePipe {
  translate = inject(TranslateService);
  _ref = inject(ChangeDetectorRef);
  value = "";
  lastKey = null;
  lastParams = [];
  onTranslationChange;
  onLangChange;
  onFallbackLangChange;
  updateValue(key, interpolateParams, translations) {
    const onTranslation = /* @__PURE__ */ __name((res) => {
      this.value = res !== void 0 ? res : key;
      this.lastKey = key;
      this._ref.markForCheck();
    }, "onTranslation");
    if (translations) {
      const res = this.translate.getParsedResult(key, interpolateParams);
      if (isObservable(res)) {
        res.subscribe(onTranslation);
      } else {
        onTranslation(res);
      }
    }
    this.translate.get(key, interpolateParams).subscribe(onTranslation);
  }
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  transform(query, ...args) {
    if (!query || !query.length) {
      return query;
    }
    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }
    let interpolateParams = void 0;
    if (isDefinedAndNotNull(args[0]) && args.length) {
      if (isString(args[0]) && args[0].length) {
        const validArgs = args[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
        try {
          interpolateParams = JSON.parse(validArgs);
        } catch (e) {
          void e;
          throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
        }
      } else if (isDict(args[0])) {
        interpolateParams = args[0];
      }
    }
    this.lastKey = query;
    this.lastParams = args;
    this.updateValue(query, interpolateParams);
    this._dispose();
    if (!this.onTranslationChange) {
      this.onTranslationChange = this.translate.onTranslationChange.subscribe((event) => {
        if (this.lastKey && event.lang === this.translate.getCurrentLang() || event.lang === this.translate.getFallbackLang()) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    if (!this.onLangChange) {
      this.onLangChange = this.translate.onLangChange.subscribe((event) => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    if (!this.onFallbackLangChange) {
      this.onFallbackLangChange = this.translate.onFallbackLangChange.subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams);
        }
      });
    }
    return this.value;
  }
  /**
   * Clean any existing subscription to change events
   */
  _dispose() {
    if (typeof this.onTranslationChange !== "undefined") {
      this.onTranslationChange.unsubscribe();
      this.onTranslationChange = void 0;
    }
    if (typeof this.onLangChange !== "undefined") {
      this.onLangChange.unsubscribe();
      this.onLangChange = void 0;
    }
    if (typeof this.onFallbackLangChange !== "undefined") {
      this.onFallbackLangChange.unsubscribe();
      this.onFallbackLangChange = void 0;
    }
  }
  ngOnDestroy() {
    this._dispose();
  }
};
__name(_TranslatePipe, "TranslatePipe");
__publicField(_TranslatePipe, "ɵfac", /* @__PURE__ */ __name(function TranslatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslatePipe)();
}, "TranslatePipe_Factory"));
__publicField(_TranslatePipe, "ɵpipe", ɵɵdefinePipe({
  name: "translate",
  type: _TranslatePipe,
  pure: false
}));
__publicField(_TranslatePipe, "ɵprov", ɵɵdefineInjectable({
  token: _TranslatePipe,
  factory: _TranslatePipe.ɵfac
}));
var TranslatePipe = _TranslatePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Injectable
  }, {
    type: Pipe,
    args: [{
      name: "translate",
      standalone: true,
      pure: false
      // required to update the value when the promise is resolved
    }]
  }], null, null);
})();
function provideTranslateLoader(loader) {
  return {
    provide: TranslateLoader,
    useClass: loader
  };
}
__name(provideTranslateLoader, "provideTranslateLoader");
function provideTranslateCompiler(compiler) {
  return {
    provide: TranslateCompiler,
    useClass: compiler
  };
}
__name(provideTranslateCompiler, "provideTranslateCompiler");
function provideTranslateParser(parser) {
  return {
    provide: TranslateParser,
    useClass: parser
  };
}
__name(provideTranslateParser, "provideTranslateParser");
function provideMissingTranslationHandler(handler) {
  return {
    provide: MissingTranslationHandler,
    useClass: handler
  };
}
__name(provideMissingTranslationHandler, "provideMissingTranslationHandler");
function provideTranslateService(config = {}) {
  return defaultProviders(__spreadValues({
    compiler: provideTranslateCompiler(TranslateNoOpCompiler),
    parser: provideTranslateParser(TranslateDefaultParser),
    loader: provideTranslateLoader(TranslateNoOpLoader),
    missingTranslationHandler: provideMissingTranslationHandler(DefaultMissingTranslationHandler)
  }, config), true);
}
__name(provideTranslateService, "provideTranslateService");
function provideChildTranslateService(config = {}) {
  return defaultProviders(__spreadValues({
    extend: true
  }, config), false);
}
__name(provideChildTranslateService, "provideChildTranslateService");
function defaultProviders(config = {}, provideStore) {
  const providers = [];
  if (config.loader) {
    providers.push(config.loader);
  }
  if (config.compiler) {
    providers.push(config.compiler);
  }
  if (config.parser) {
    providers.push(config.parser);
  }
  if (config.missingTranslationHandler) {
    providers.push(config.missingTranslationHandler);
  }
  if (provideStore) {
    providers.push(TranslateStore);
  }
  if (config.useDefaultLang || config.defaultLanguage) {
    console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead.");
    if (config.useDefaultLang === true && config.defaultLanguage) {
      config.fallbackLang = config.defaultLanguage;
    }
  }
  const serviceConfig = {
    fallbackLang: config.fallbackLang ?? null,
    lang: config.lang,
    extend: config.extend ?? false
  };
  providers.push({
    provide: TRANSLATE_SERVICE_CONFIG,
    useValue: serviceConfig
  });
  providers.push({
    provide: TranslateService,
    useClass: TranslateService,
    deps: [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, TRANSLATE_SERVICE_CONFIG]
  });
  return providers;
}
__name(defaultProviders, "defaultProviders");
var _TranslateModule = class _TranslateModule {
  /**
   * Use this method in your root module to provide the TranslateService
   */
  static forRoot(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [...defaultProviders(__spreadValues({
        compiler: provideTranslateCompiler(TranslateNoOpCompiler),
        parser: provideTranslateParser(TranslateDefaultParser),
        loader: provideTranslateLoader(TranslateNoOpLoader),
        missingTranslationHandler: provideMissingTranslationHandler(DefaultMissingTranslationHandler)
      }, config), true)]
    };
  }
  /**
   * Use this method in your other (non-root) modules to import the directive/pipe
   */
  static forChild(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [...defaultProviders(config, config.isolate ?? false)]
    };
  }
};
__name(_TranslateModule, "TranslateModule");
__publicField(_TranslateModule, "ɵfac", /* @__PURE__ */ __name(function TranslateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslateModule)();
}, "TranslateModule_Factory"));
__publicField(_TranslateModule, "ɵmod", ɵɵdefineNgModule({
  type: _TranslateModule,
  imports: [TranslatePipe, TranslateDirective],
  exports: [TranslatePipe, TranslateDirective]
}));
__publicField(_TranslateModule, "ɵinj", ɵɵdefineInjector({}));
var TranslateModule = _TranslateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateModule, [{
    type: NgModule,
    args: [{
      imports: [TranslatePipe, TranslateDirective],
      exports: [TranslatePipe, TranslateDirective]
    }]
  }], null, null);
})();

export {
  _,
  MissingTranslationHandler,
  DefaultMissingTranslationHandler,
  TranslateCompiler,
  TranslateNoOpCompiler,
  TranslateLoader,
  TranslateNoOpLoader,
  equals,
  isDefinedAndNotNull,
  isDefined,
  isDict,
  isObject,
  isArray,
  isString,
  isFunction,
  mergeDeep,
  getValue,
  setValue,
  insertValue,
  TranslateParser,
  TranslateDefaultParser,
  TranslateStore,
  TRANSLATE_SERVICE_CONFIG,
  ITranslateService,
  TranslateService,
  TranslateDirective,
  TranslatePipe,
  provideTranslateLoader,
  provideTranslateCompiler,
  provideTranslateParser,
  provideMissingTranslationHandler,
  provideTranslateService,
  provideChildTranslateService,
  defaultProviders,
  TranslateModule
};
//# sourceMappingURL=chunk-DRZMNJP2.js.map
