'use strict';



;define("bullyin/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("bullyin/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "bullyin/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"bullyin/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("bullyin/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("bullyin/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("bullyin/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("bullyin/helpers/app-version", ["exports", "@ember/component/helper", "bullyin/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"bullyin/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("bullyin/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("bullyin/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("bullyin/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("bullyin/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "bullyin/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"bullyin/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("bullyin/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("bullyin/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("bullyin/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("bullyin/initializers/export-application-global", ["exports", "ember", "bullyin/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"bullyin/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("bullyin/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("bullyin/router", ["exports", "@ember/routing/router", "bullyin/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"bullyin/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('contact');
    this.route('home', {
      path: '/'
    });
    this.route('hartuirea-fizica');
    this.route('notfound', {
      path: '/*path'
    });
    this.route('bullying-verbal');
    this.route('cyberbullying');
    this.route('bullying-social');
    this.route('comportament-agresiv');
    this.route('legislatie');
  });
});
;define("bullyin/routes/bullying-social", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class BullyingSocialRoute extends _route.default {
    activate() {
      window.scroll(0, 0);
    }

  }

  _exports.default = BullyingSocialRoute;
});
;define("bullyin/routes/bullying-verbal", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class BullyingVerbalRoute extends _route.default {
    activate() {
      window.scroll(0, 0);
    }

  }

  _exports.default = BullyingVerbalRoute;
});
;define("bullyin/routes/comportament-agresiv", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class ComportamentAgresivRoute extends _route.default {
    activate() {
      window.scroll(0, 0);
    }

  }

  _exports.default = ComportamentAgresivRoute;
});
;define("bullyin/routes/contact", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class ContactRoute extends _route.default {
    activate() {
      window.scroll(0, 0);
    }

  }

  _exports.default = ContactRoute;
});
;define("bullyin/routes/cyberbullying", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class CyberbullyingRoute extends _route.default {
    activate() {
      window.scroll(0, 0);
    }

  }

  _exports.default = CyberbullyingRoute;
});
;define("bullyin/routes/hartuirea-fizica", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class HartuireaFizicaRoute extends _route.default {
    activate() {
      window.scroll(0, 0);
    }

  }

  _exports.default = HartuireaFizicaRoute;
});
;define("bullyin/routes/home", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class HomeRoute extends _route.default {}

  _exports.default = HomeRoute;
});
;define("bullyin/routes/legislatie", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class LegislatieRoute extends _route.default {}

  _exports.default = LegislatieRoute;
});
;define("bullyin/routes/notfound", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class NotfoundRoute extends _route.default {}

  _exports.default = NotfoundRoute;
});
;define("bullyin/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("bullyin/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("bullyin/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("bullyin/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("bullyin/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("bullyin/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("bullyin/styles/tailwind.config", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  module.exports = {
    content: [],
    theme: {
      extend: {}
    },
    plugins: []
  };
});
;define("bullyin/styles/tailwind/config", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  module.exports = {
    content: ['./app/**/*.hbs'],
    theme: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        black: '#151719',
        white: '#eceded',
        gray: {
          500: '#9ca9b3',
          600: '#2a2d32',
          700: '#33363a',
          800: '#25282c'
        },
        green: {
          300: '#73efcc',
          400: '#1cb68b'
        },
        indigo: {
          400: '#acadff',
          500: '#6b6dff',
          600: '#6163ff',
          700: '#5658dd'
        },
        red: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c'
        }
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      }
    },
    plugins: [require("tailwindcss-font-inter")()]
  };
});
;define("bullyin/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "sXSrECcW",
    "block": "[[[1,[28,[35,0],[\"Bullyin\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "bullyin/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/bullying-social", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Zv0kYFJ9",
    "block": "[[[1,[28,[35,0],[\"Bullying social\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Înapoi acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Bullying \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"social\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Scopul hărțuirii relaționale este de a deteriora sau distruge reputația sau statutul social al victimei sau ambele. Acest lucru explică de ce bullying-ul social este cel mai răspândit în rândul tinerilor adolescenți.\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-10\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/articles/being-sad-feel-like-outcast-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Se consideră faptul că perioada de vârstă 9 – 12 ani, este perioada în care devenim conștienți de cine suntem în relație cu ceilalți din jurul nostru. Reputația noastră socială, relațiile sociale și ceea ce cred cei din afara familiei noastre despre noi capătă o mare importanță. Copiii devin conștienți de propria lor persoană, acordând importanță aspectului, integrării cu ceilalți și intimității.\\n  \\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/bullying-social.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/bullying-verbal", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "LmgWq+jX",
    "block": "[[[1,[28,[35,0],[\"Bullying verbal\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Înapoi acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Bullying \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"verbal\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Hărțuirea verbală, poate începe ca o simplă tachinare sau o ușoară insultă. Acest lucru poate escalada rapid în violență verbală care provoacă prejudicii grave victimei sale.\\n    \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-10\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/articles/bullying_verbal-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Hărțuirea verbală, poate începe ca o simplă tachinare sau o ușoară insultă. Acest lucru poate escalada rapid în violență verbală care provoacă prejudicii grave victimei sale.\\n        Este caracterizat de acțiuni verbale sau scrise, rău intenționate, cum ar fi \"],[10,\"b\"],[12],[1,\"șicanarea, injuriile, comentariile sexuale neadecvate, folosirea sarcasmului,\\n         amenințările, criticiile, un limbaj neadecvat\"],[13],[1,\".\\n         \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n         Bullying-ul social are efecte negative asupra sănătății mentale a victimei și a familiei acesteia, atât pe termen scurt, cât și pe termen lung.\\nEfectele acestui fenomen pot fi: izolare socială, tulburări ale somnului, scăderea stimei de sine, apariția unui sentiment de rușine, performanțe școlare reduse din cauza scăderii capacității de concentrare.\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/bullying-verbal.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/comportament-agresiv", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "vLdLxy9r",
    "block": "[[[1,[28,[35,0],[\"Comportament agresiv\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Înapoi acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Comportament \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"agresiv\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Comportamentul agresiv are în compoziţia sa patru factori: furie, agresivitate fizică, ostilitate și agresivitate verbală.\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-10\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/articles/woman-hand-sign-stop-abusing-violence-human-rights-day-concept-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Acest tip de comportament este rezultat din nevoia agresorului de a își arăta superioritatea prin orice formă posibilă, scopul fiind de a face victima să se simtă inferioară, agresorul dorind să impresioneze ceilalți colegi prin umilirea celui mai slab.\\n        \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n        Comportamentul agresiv, spre deosebire de celelalte tipuri de bullying se referă la acțiunile agresorului ce au in spate traume personale, certuri sau violențe în familie. Persoanele care prezintă acest tip de comportament, au de cele mai multe ori frustrări și nemulțumiri, față de ei înșiși, pe care le critică atunci când agresează.\\n\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/comportament-agresiv.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/contact", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "bwKcx7W1",
    "block": "[[[1,[28,[35,0],[\"Contact\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[8,[39,3],[[24,0,\"btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Contactează-ne \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"chiar tu\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Autoritățile sunt în permanență la dispoziția copiilor care au nevoie de ajutor. Nu ezita să folosești oricând una dintre metodele de contact de mai jos.\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"w-full mb-4 whitespace-no-wrap bg-red-600 btn btn-tall md:w-auto hover:bg-red-500 sm:mr-2\"],[14,6,\"mailto:dgpdcarges@yahoo.com,csccdpitesti@yahoo.com\"],[12],[1,\"\\n          Trimite-ne un email\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"w-full mb-4 whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2\"],[14,6,\"tel:+40731221323\"],[12],[1,\"\\n          Sună un specialist\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"w-full mb-4 whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2\"],[14,6,\"tel:119\"],[12],[1,\"\\n          Telefonul copilului\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-16\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/teenager-guy-sits-room-bed-uses-smartphone-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/contact.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/cyberbullying", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "cTlRcyx3",
    "block": "[[[1,[28,[35,0],[\"Cyberbullying\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Înapoi acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Cyber\"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"bullying\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Comportamentul de hărțuire cibernetică este o problemă importantă pentru adolescenți. Sunt adesea considerați „suficient de bătrâni” pentru a avea telefoane...\\n    \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-10\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/articles/beautiful-tired-business-woman-is-holding-her-head-massaging-her-nose-bridge-while-working-laptop-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Comportamentul de hărțuire cibernetică este o problemă importantă pentru adolescenți. Sunt adesea considerați „suficient de bătrâni” pentru a avea telefoane mobile și pentru a fi activi pe site-uri web precum Facebook, YouTube, platforme de jocuri și altele cu mai puțină supraveghere parentală. Aceasta înseamnă că fiecare copil cu vârsta cuprinsă între 9 și 12 ani este o țintă pentru un agresor cibernetic.\\n        \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n        Cyberbullying-ul este reprezentat de acțiuni ca postarea de fotografii penibile ale victimei pe rețelele de socializare, \\nrăspândirea zvonurilor utilizând rețelele sociale, textele și chaturile, încurajarea altor copii să excludă victima din conexiunile online (exemple: unfollow, report, anularea priteniei,umilire prin story-uri și postări), postarea de comentarii negative și insulte pe rețelele de socializare a victimei, excluderea de pe platformele de jocuri, \\nfolosirea poreclelor umilitoare în platformele de jocuri și în alte grupuri online, respectiv încurajarea altora să facă același lucru.\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/cyberbullying.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/hartuirea-fizica", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "G23tr66y",
    "block": "[[[1,[28,[35,0],[\"Hărțuirea fizică\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n       \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n       \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Înapoi acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Hărțuirea \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"fizică\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Este cea mai evidentă formă de hărțuire. Apare atunci când copiii folosesc acțiuni fizice pentru a câștiga putere și control asupra țintelor lor.\\n    \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-10\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/articles/bullying-hallway-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Bătăușii fizici tind să fie mai mari, mai puternici și mai agresivi decât colegii lor. Exemplele de agresiune fizică includ loviturile, lovirea cu pumnii, palmele, împingerea și alte atacuri fizice.\\nSpre deosebire de alte forme de bullying, agresiunea fizică este cea mai ușor de identificat.\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\" \\nCauzele bullying-ului fizic sunt:\\n\"],[10,\"br\"],[12],[13],[1,\"\\n- \"],[10,\"b\"],[12],[1,\"directe\"],[13],[1,\": vânătăi, zgârieturi, răni; \\n\"],[10,\"br\"],[12],[13],[1,\"\\n- \"],[10,\"b\"],[12],[1,\"indirecte\"],[13],[1,\": caiete rupte, obiecte distruse sau furate (de exemplu, copilul se întoarce acasă fără ceas sau fără telefonul mobil).\\n În cele mai multe cazuri, efectele bullying-ului fizic sunt la nivel emoțional. Ele pot să includă: stimă de sine redusă, anxietate, depresie, randament școlar redus, ideație suicidară, tulburări de alimentație, rușine. Victima se simte neputincioasă și singură.  \\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/hartuirea-fizica.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/home", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "UgEDyg+y",
    "block": "[[[1,[28,[35,0],[\"Acasă\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"mr-8 font-semibold hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[10,3],[14,0,\"bg-red-600 btn hover:bg-red-500\"],[14,6,\"#\"],[12],[1,\"Acasă\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Spune și tu Stop \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"Bullyin'\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Prima campanie din România care țintește diferit oprirea bullying-ului din\\n         școlile și liceele din sistemul de stat.\\n         \"],[10,\"b\"],[12],[1,\"Poți câștiga un iPhone dacă răspunzi la niște întrebări despre bullying.\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"flex flex-col justify-center max-w-xs mx-auto mb-8 sm:max-w-full sm:flex-row\"],[12],[1,\"\\n      \"],[10,3],[14,0,\"w-full mb-4 whitespace-no-wrap bg-red-600 btn btn-tall md:w-auto hover:bg-red-500 sm:mr-2\"],[14,6,\"https://concurs.fyo.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n        Înscrie-te în concurs\\n      \"],[13],[1,\"\\n      \"],[8,[39,3],[[24,0,\"w-full mb-4 whitespace-no-wrap bg-gray-600 btn btn-tall md:w-auto hover:bg-red-500 sm:mr-2\"],[24,\"rel\",\"noopener noreferrer\"]],[[\"@route\"],[\"legislatie\"]],[[\"default\"],[[[[1,\"\\n        Legislație\\n      \"]],[]]]]],[1,\"\\n        \"],[3,\"<a\\n          class=\\\"w-full mb-4 whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2\\\"\\n          href=\\\"#\\\"\\n        >\\n          Urmărește-ne!\\n        </a>\"],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-16\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/boy-student-getting-bullied-school-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"title sm:text-4xl md:text-5xl\"],[12],[1,\"\\n          Ce este bullying-ul?\\n        \"],[13],[1,\"\\n        \"],[10,2],[14,0,\"mb-16 mx-auto intro sm:max-w-xl\"],[12],[1,\"\\n          Bullying-ul este în general caracterizat ca un comportament \"],[10,\"b\"],[12],[1,\"agresiv\"],[13],[1,\", intenționat, menit să provoace suferință și care implică întotdeauna un dezechilibru de putere și tărie între agresor și victimă și se manifestă repetitiv, regulat, într-un grup de copii. \"],[10,\"b\"],[12],[1,\"Apasă pe icon-urile de mai jos pentru informații care te vor ajuta la quizz!\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-800 sm:flex-row\"],[12],[1,\"\\n          \"],[10,\"li\"],[14,0,\"w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[8,[39,3],null,[[\"@route\"],[\"hartuirea-fizica\"]],[[\"default\"],[[[[1,\"\\n            \"],[10,1],[14,0,\"flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-red-700 rounded-full animate-pulse\"],[12],[1,\"\\n              \"],[10,\"img\"],[14,\"src\",\"img/feature-tile-icon-01.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"mb-2 text-2xl font-bold text-white hover:text-red-500\"],[12],[1,\"Hărțuirea fizică\"],[13],[1,\"\\n            \"],[10,2],[14,0,\"max-w-xs mx-auto text-lg text-gray-500\"],[12],[1,\"\\n              Este cea mai evidentă formă de hărțuire. Apare atunci când copiii folosesc acțiuni fizice pentru a câștiga putere și control asupra țintelor lor...\\n            \"],[13],[1,\"\\n            \"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[8,[39,3],null,[[\"@route\"],[\"bullying-verbal\"]],[[\"default\"],[[[[1,\"\\n            \"],[10,1],[14,0,\"flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-red-700 rounded-full animate-pulse\"],[12],[1,\"\\n              \"],[10,\"img\"],[14,\"src\",\"img/feature-tile-icon-02.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"mb-2 text-2xl font-bold text-white hover:text-red-500\"],[12],[1,\"Bullying verbal\"],[13],[1,\"\\n            \"],[10,2],[14,0,\"max-w-xs mx-auto text-lg text-gray-500\"],[12],[1,\"\\n              Hărțuirea verbală, poate începe ca o simplă tachinare sau o ușoară insultă. Acest lucru poate escalada rapid în violență verbală care...\\n            \"],[13],[1,\"\\n            \"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[8,[39,3],null,[[\"@route\"],[\"cyberbullying\"]],[[\"default\"],[[[[1,\"\\n            \"],[10,1],[14,0,\"flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-red-700 rounded-full animate-pulse\"],[12],[1,\"\\n              \"],[10,\"img\"],[14,\"src\",\"img/feature-tile-icon-03.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"mb-2 text-2xl font-bold text-white hover:text-red-500\"],[12],[1,\"Cyberbullying\"],[13],[1,\"\\n            \"],[10,2],[14,0,\"max-w-xs mx-auto text-lg text-gray-500\"],[12],[1,\"\\n              Cyberbullying-ul este reprezentat de acțiuni ca postarea de fotografii penibile ale victimei pe rețelele de socializare, răspândirea zvonurilor...\\n            \"],[13],[1,\"\\n            \"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[8,[39,3],null,[[\"@route\"],[\"bullying-social\"]],[[\"default\"],[[[[1,\"\\n            \"],[10,1],[14,0,\"flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-red-700 rounded-full animate-pulse\"],[12],[1,\"\\n              \"],[10,\"img\"],[14,\"src\",\"img/feature-tile-icon-04.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"mb-2 text-2xl font-bold text-white hover:text-red-500\"],[12],[1,\"\\n              Bullying social\\n            \"],[13],[1,\"\\n            \"],[10,2],[14,0,\"max-w-xs mx-auto text-lg text-gray-500\"],[12],[1,\"\\n              Scopul hărțuirii relaționale este de a deteriora sau distruge reputația sau statutul social al victimei sau ambele. Acest lucru explică de ce bullying-ul social este cel mai...\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[8,[39,3],null,[[\"@route\"],[\"comportament-agresiv\"]],[[\"default\"],[[[[1,\"\\n            \"],[10,1],[14,0,\"flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-red-700 rounded-full animate-pulse\"],[12],[1,\"\\n            \"],[10,\"img\"],[14,\"src\",\"img/feature-tile-icon-06.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"mb-2 text-2xl font-bold text-white hover:text-red-500\"],[12],[1,\"\\n              Comportament fizic/verbal agresiv\\n            \"],[13],[1,\"\\n            \"],[10,2],[14,0,\"max-w-xs mx-auto text-lg text-gray-500\"],[12],[1,\"\\n              Acest tip de comportament este rezultat din nevoia agresorului de a își arăta superioritatea prin orice formă posibilă, scopul fiind de a face victima să se simtă inferioară...\\n            \"],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[3,\"<li class=\\\"w-full px-8 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3\\\">\\n            <span\\n              class=\\\"flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-red-700 rounded-full\\\"\\n            >\\n              <img src=\\\"img/feature-tile-icon-06.svg\\\" alt=\\\"\\\" />\\n            </span>\\n            <h3 class=\\\"mb-2 text-2xl font-medium text-white\\\">\\n              Robust Workflow\\n            </h3>\\n            <p class=\\\"max-w-xs mx-auto text-lg text-gray-500\\\">\\n              Duis aute irure dolor in reprehenderit in voluptate velit esse\\n              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\\n              cupidatat.\\n            </p>\\n          </li>\"],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-16 border-b border-gray-800\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"mb-2 title sm:text-4xl md:text-5xl\"],[12],[1,\"\\n          Informații utile\\n        \"],[13],[1,\"\\n        \"],[10,2],[14,0,\"mb-20 mx-auto intro sm:max-w-xl\"],[12],[1,\"\\n          Mai jos am pregătit un set de informații pe care unii dintre noi le-ar putea considera interesante și/sau utile.\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-col mb-8 sm:flex-row\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last\"],[12],[1,\"\\n            \"],[10,\"img\"],[14,0,\"rounded-sm\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/university-students-bullying-their-group-mate-college-girl-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16\"],[12],[1,\"\\n            \"],[10,2],[14,0,\"mb-2 text-sm font-semibold leading-none text-center text-red-600 uppercase sm:text-left\"],[12],[1,\"\\n            Informație utilă\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"title title-small sm:text-left md:text-4xl\"],[12],[1,\"\\n              Cum afectează bullying-ul elevii?\\n            \"],[13],[1,\"\\n            \"],[10,2],[14,0,\"text md:text-left\"],[12],[1,\"\\n              A fi hărțuit social are efecte negative grave asupra sănătății mintale a victimei. Acestea pot include: singurătate, depresie, tulburări de anxietate, anxietate socială și evitare, suferință fizică, cum ar fi dureri de cap sau de stomac, tulburări de alimentație și tulburări de somn, probleme de comportament, cum ar fi acționarea, retragerea, afișarea de emoții inadecvate în situații sociale.\\n\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-col mb-8 sm:flex-row\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"flex items-center mb-8 sm:w-1/2 md:w-5/12\"],[12],[1,\"\\n            \"],[10,\"img\"],[14,0,\"rounded-sm\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/depressed-college-student-feels-down-after-examination-because-poor-results-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16\"],[12],[1,\"\\n            \"],[10,2],[14,0,\"mb-2 text-sm font-semibold leading-none text-center text-red-600 uppercase sm:text-left\"],[12],[1,\"\\n            Informație utilă\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"title title-small sm:text-left md:text-4xl\"],[12],[1,\"\\n              De ce există agresorii?\\n            \"],[13],[1,\"\\n            \"],[10,2],[14,0,\"text md:text-left\"],[12],[1,\"\\n              Majoritatea specialiștilor au menționat că agresorii au o emotivitate instabilă. Frecvent, inițiatorii provin din familii bine asigurate din punct de vedere material, au un statut de lider în clasă sau într-un grup de adolescenți, au o anumită autoritate și sunt adolescenții agreați de către profesori. Ei dețin o anumită putere în clasă. Majoritatea sunt supuși violenței în familie, divorțurile dintre părinți, ignoranța părinților, certuri în familie, iar la școală își exteriorizează energia negativă.\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-col mb-8 sm:flex-row\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last\"],[12],[1,\"\\n            \"],[10,\"img\"],[14,0,\"rounded-sm\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/concentrated-couple-preparing-some-work-laptop-sitting-library-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16\"],[12],[1,\"\\n            \"],[10,2],[14,0,\"mb-2 text-sm font-semibold leading-none text-center text-red-600 uppercase sm:text-left\"],[12],[1,\"\\n             Informație utilă\\n            \"],[13],[1,\"\\n            \"],[10,\"h3\"],[14,0,\"title title-small sm:text-left md:text-4xl\"],[12],[1,\"\\n              Cum prevenim bullying-ul\\n            \"],[13],[1,\"\\n            \"],[10,2],[14,0,\"text md:text-left\"],[12],[1,\"\\n              În primul rând, este necesar suportul oferit tuturor tinerilor implicați (agresor, victimă și observatori), promovarea unei atmosfere de comunicare de încredere, transmiterea senzației că pot vorbi cu tine despre orice. Astfel putem ajuta victimele să recunoască că nu este vina lor a ceea ce se întâmplă și că bullying-ul este ceva greșit, condamnabil, informarea despre acest fenomen pentru a acorda atenția necesară situației, colaborarea întregii comunității în vederea realizării unui plan de acțiune (școală, părinți, elevi), discutarea în cadrul orelor de la școală despre acest fenomen, implicarea părinților înainte ca o situație să degenereze, stabilirea unor consecințe menite să susțină elevii (consiliere psihologică, discuții, manifestarea empatiei, încurajarea grupului la atitudini de acceptare, susținere și respect), stabilirea unor reguli și limite clare valabile pentru toate persoanele implicate în școală, implicarea activă a elevilor în combaterea bullying-ului, conform Centers for Disease Control and Department of Education și specialiștilor DGASPC Argeș.\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-16\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"title sm:text-4xl md:text-5xl\"],[12],[1,\"Ce spune societatea?\"],[13],[1,\"\\n        \"],[10,2],[14,0,\"intro mx-auto sm:max-w-xl\"],[12],[1,\"\\n          Aici sunt listate părerile persoanelor implicate în această campanie.\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-col justify-center -ml-4 -mr-4 md:flex-row md:flex-wrap\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"p-8 bg-gray-800\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"mb-8 text-red-600\"],[12],[1,\"\\n                \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"24\"],[14,\"height\",\"18\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n                  \"],[10,\"path\"],[14,\"d\",\"M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z\"],[14,\"fill-rule\",\"nonzero\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"blockquote\"],[14,0,\"pb-8 mb-4 -mt-4 text-lg border-b border-gray-700\"],[12],[1,\"\\n              David miroase urât, nu vă mai apropiați de el. Asa spuneau colegii lui de clasă. Acesta sta singur, în ultima bancă. În fiecare zi, colegii deschid geamurile pentru a aerisi clasa. I se mai spune si \\\"cioară \\\", \\\"sărac\\\", \\\"analfabet\\\". David se gândește să abandoneze școala, deoarece se simte exclus, umilit, jignit, trist. Mesaje pt adolescenți: Dacă sunteți victime ale bullying-ului, cereți ajutor familiei, prietenilor, profesorilor, autorităților. Nu vă izolați! Aveți dreptul de a trăi intr-un mediu sigur! Sunt și alții care trec prin astfel de situații!  Daca sunteți martori ai bullying-ului, nu rămâneți tăcuți, interveniti! Știu că va este teamă să nu ajungeți victime, dar ajutandu-vă colegii, deveniți eroi!  Dacă ați tratat pe cineva cu răutate, opriti-vă! Puneți-vă întrebări de unde vine furia pe care o simțiți și adresați-vă specialiștilor. Gândiți-vă cum v-ati simți dacă cineva v-ar trata la fel! Cereți-vă scuze și recastigati-vă respectul celorlalți! Ce tie nu iti place, altuia nu-i face!\\n              \"],[13],[1,\"\\n              \"],[10,2],[14,0,\"font-semibold\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"text-white\"],[12],[1,\"Violeta Rainea\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"text-gray-700\"],[12],[1,\"/\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"text-red-600\"],[12],[1,\"Psiholog\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"p-8 bg-gray-800\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"mb-8 text-red-600\"],[12],[1,\"\\n                \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"24\"],[14,\"height\",\"18\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n                  \"],[10,\"path\"],[14,\"d\",\"M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z\"],[14,\"fill-rule\",\"nonzero\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"blockquote\"],[14,0,\"pb-8 mb-4 -mt-4 text-lg border-b border-gray-700\"],[12],[1,\"\\n                Problema pe care încercăm să o combatem are un istoric suficient de consistent încât să ne punem două semne de întrebare înainte să începem campania: cine să o facă și cum să o facă. \\n                De data aceasta, acțiunea este modelată pe necesitățile societății din secolul 21 de către Consiliul Județean al Elevilor Argeș, cu sprijinul celor 7 instituții partenere. Marca Bullyin' este definită de profesionalism și perfecționalism, așa cum ne-am obișnuit toți colaboratorii. Suntem convinși că vom avea un impact pozitiv asupra tuturor elevilor implicați.\\n              \"],[13],[1,\"\\n              \"],[10,2],[14,0,\"font-semibold\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"text-gray-700\"],[12],[1,\"/\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"text-red-600\"],[12],[1,\"Președinte CJE Argeș (2020-2022)\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"p-8 bg-gray-800\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"mb-8 text-red-600\"],[12],[1,\"\\n                \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"24\"],[14,\"height\",\"18\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n                  \"],[10,\"path\"],[14,\"d\",\"M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z\"],[14,\"fill-rule\",\"nonzero\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"blockquote\"],[14,0,\"pb-8 mb-4 -mt-4 text-lg border-b border-gray-700\"],[12],[1,\"\\n              Am crescut și m-am maturizat astfel încât să nu mai las cuvintele altora să îmi dicteze cine sunt. A trecut mult timp, timp în care am luptat să îmi creez valorile și să îmi corup temerile din a deveni versiunea care mă va constrânge să vindec răni din exterior, sau să le las să devină parte din mine. Durerea poate să devină ori un erou, ori un criminal, tu alegi!\\n              \"],[13],[1,\"\\n              \"],[10,2],[14,0,\"font-semibold\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"text-white\"],[12],[1,\"Andreea\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"text-gray-700\"],[12],[1,\"/\"],[13],[1,\"\\n                \"],[10,1],[14,0,\"text-red-600\"],[12],[1,\"Elevă\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/home.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/legislatie", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "/l51TocB",
    "block": "[[[1,[28,[35,0],[\"Legislație\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n       \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n       \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Înapoi acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Puțină \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"legislație\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n        Fenomenul de bullying are un cadru legal, de care autoritățile se pot folosi în vederea rezolvării tuturor cazurilor.\\n    \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"mb-10\"],[12],[1,\"\\n        \"],[10,\"img\"],[14,0,\"block w-full max-w-5xl mx-auto rounded\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/police-car-night-2.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-4xl\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"Bullying-ul poate fi pedepsit prin lege\"],[13],[1,\", \"],[10,\"b\"],[12],[1,\"deși acesta nu este definit prin neologismul preluat din limba engleză (bullying)\"],[13],[1,\", este definit ca hărțuire, deranjarea ordinii publice, protecţia şi promovarea drepturilor copilului etc.\\n        \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,\"b\"],[12],[1,\"Codul Penal, \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"Art. 113\"],[13],[1,\" - \"],[13],[1,\"\\n \"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(1)\"],[13],[1,\" Minorul care nu a împlinit vârsta de 14 ani nu răspunde penal.\\n \"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(2)\"],[13],[1,\" Minorul care are vârsta între 14 şi 16 ani răspunde penal numai dacă se dovedeşte că a săvârşit fapta cu discernământ.\\n \"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(3)\"],[13],[1,\" Minorul care a împlinit vârsta de 16 ani răspunde penal potrivit legii.\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,\"b\"],[12],[1,\"În Codul Penal, capitolul VI, \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"art. 206\"],[13],[1,\", alin. 1\"],[13],[1,\", Fapta de a ameninţa o persoană cu săvârşirea unei infracţiuni sau a unei fapte păgubitoare îndreptate împotriva sa ori a altei persoane, dacă este de natură să îi producă o stare de temere, \"],[10,1],[14,0,\"font-bold text-red-700\"],[12],[1,\"se pedepseşte cu închisoare de la 3 luni la un an sau cu amendă\"],[13],[1,\", fără ca pedeapsa aplicată să poată depăşi sancţiunea prevăzută de lege pentru infracţiunea care a format obiectul ameninţării.\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"Art. 208\"],[13],[1,\" \"],[10,\"b\"],[12],[1,\"- Hărţuirea\"],[13],[1,\"\\n\"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(2)\"],[13],[1,\" Efectuarea de apeluri telefonice sau comunicări prin mijloace de transmitere la distanţă, care, prin frecvenţă sau conţinut, îi cauzează o temere unei persoane, \"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"se pedepseşte cu închisoare de la o lună la 3 luni sau cu amendă\"],[13],[1,\", dacă fapta nu constituie o infracţiune mai gravă. \\n\"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(3)\"],[13],[1,\" Acţiunea penală se pune în mişcare la plângerea prealabilă a persoanei vătămate.\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"Art. 325\"],[13],[1,\" \"],[10,\"b\"],[12],[1,\"- Falsul informatic\"],[13],[10,\"br\"],[12],[13],[1,\" - Fapta de a introduce, modifica sau şterge, fără drept, date informatice ori de a restricţiona, fără drept, accesul la aceste date, rezultând date necorespunzătoare adevărului, în scopul de a fi utilizate în vederea producerii unei consecinţe juridice, constituie infracţiune şi \"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"se pedepseşte cu închisoarea de la unu la 5 ani\"],[13],[1,\".\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"Art. 374\"],[13],[1,\" - \"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(1)\"],[13],[1,\" Producerea, deţinerea în vederea expunerii sau distribuirii, achiziţionarea, stocarea, expunerea, promovarea, distribuirea, precum şi punerea la dispoziţie, în orice mod, de materiale pornografice cu minori se pedepsesc cu închisoarea de la un an la 5 ani.\\n\"],[10,\"br\"],[12],[13],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(2)\"],[13],[1,\" Dacă faptele prevăzute în alin. (1) au fost săvârşite printr-un sistem informatic sau alt mijloc de stocare a datelor informatice, pedeapsa este închisoarea de la 2 la 7 ani.\\n\"],[10,\"br\"],[12],[13],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(3)\"],[13],[1,\" Accesarea, fără drept, de materiale pornografice cu minori, prin intermediul sistemelor informatice sau altor mijloace de comunicaţii electronice, se pedepseşte cu închisoare de la 3 luni la 3 ani sau cu amendă.\\n\"],[10,\"br\"],[12],[13],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"(4)\"],[13],[1,\" Prin materiale pornografice cu minori se înţelege orice material care prezintă un minor având un comportament sexual explicit sau care, deşi nu prezintă o persoană reală, simulează, în mod credibil, un minor având un astfel de comportament.\\nDe asemenea, orice copil are dreptul la protejarea imaginii sale publice, el neputând fi filmat fără consimţământul părinţilor.\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[10,\"b\"],[12],[1,\"La cine poţi apela dacă drepturile tale au fost încălcate?\"],[13],[1,\"\\n\"],[10,\"br\"],[12],[13],[1,\"\\nSunând la Telefonul Copilului – \"],[10,1],[14,0,\"text-red-700 font-bold\"],[12],[1,\"119\"],[13],[1,\" - primeşti informaţii şi consiliere cu privire la promovarea şi respectarea drepturilor copiilor şi îndrumare către instituţiile în măsură să acorde asistenţa necesară.\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\nDirecţia Generală de Asistenţă Socială şi Protecţia Copilului (DGASPC) este autoritatea care se ocupă de politicile şi strategiile de asistenţă socială în domeniul protecţiei copilului, familiei, persoanelor singure, persoanelor vârstnice, persoanelor cu handicap, precum şi a oricăror persoane aflate în nevoie.\\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\nConform Legii nr. 272/2004, privind protecţia şi promovarea drepturilor copilului, republicată: Şi copilul care a comis o infracţiune trebuie protejat atunci când el nu este suficient dezvoltat fizic şi psihic şi nu răspunde penal. El va fi dat spre îngrijire şi educare unui cadru/centru specializat ori unei familii sau va fi instituită asupra sa supravegherea specializată. \\n\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\nConform Legii nr. 61/1991, pentru sancţionarea faptelor de încălcare a unor norme de convieţuire socială, a ordinii şi liniştii publice, republicată:\\nArt. 2-Constituie contraventie savarsirea oricareia dintre urmatoarele fapte, daca nu sunt comise in astfel de conditii incat, potrivit legii penale, sa fie considerate infractiuni:\\n1. savarsirea in public de fapte, acte sau gesturi obscene, proferarea de injurii, expresii jignitoare sau vulgare, amenintari cu acte de violenta impotriva persoanelor sau bunurilor acestora, de natura sa tulbure ordinea si linistea publica sau sa provoace indignarea cetatenilor ori sa lezeze demnitatea si onoarea acestora sau a institutiilor publice;\\n        \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/legislatie.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/templates/notfound", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "0BanXGJ/",
    "block": "[[[1,[28,[35,0],[\"Pagina nu a fost găsită\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[10,0],[14,0,\"absolute inset-0 bg-top bg-no-repeat bg-illustration-01\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"absolute inset-0 bg-center bg-no-repeat bg-illustration-02\"],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"container relative bg-black\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"flex items-center justify-between py-6\"],[12],[1,\"\\n        \"],[8,[39,3],null,[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          \"],[10,\"img\"],[14,0,\"block animate-pulse\"],[14,5,\"height: 50px;\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[10,0],[14,0,\"flex items-center mb-4 md:block\"],[12],[1,\"\\n          \"],[8,[39,3],[[24,0,\"bg-red-600 btn hover:bg-red-500\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"Acasă\"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl\"],[12],[1,\"\\n        Pagina nu a fost \"],[10,1],[14,0,\"text-red-700\"],[12],[1,\"găsită\"],[13],[1,\".\\n      \"],[13],[1,\"\\n      \"],[10,2],[14,0,\"max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl\"],[12],[1,\"\\n       Resursa pe care încerci să o accesezi nu a fost identificată pe serverele noastre.\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row\"],[12],[1,\"\\n        \"],[8,[39,3],[[24,0,\"w-full mb-4 whitespace-no-wrap bg-red-600 btn btn-tall md:w-auto hover:bg-red-500 sm:mr-2\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n          Înapoi acasă\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col items-center px-4 py-8 mb-16 bg-red-700 bg-right-bottom bg-no-repeat bg-cover sm:flex-row sm:py-16 sm:px-12\"],[14,5,\"background-image: url('img/cta-illustration.svg')\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,0,\"max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12\"],[12],[1,\"\\n          De data aceasta schimbăm ceva.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-wrap justify-between space-x-8 sm:space-x-0\"],[12],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://bullyin.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/Logo-Icon-Vectorial.svg\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjarges.ro/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/layout_set_logo.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://cjearges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Asset+4%407xwhite.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://ag.politiaromana.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/logo_main.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.jandarmeriaarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/Logo-IJJ.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://isjarges.ro\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/siglaisj.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,3],[14,0,\"text-red-700\"],[14,6,\"https://www.facebook.com/dgaspcARGES/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://public-bullyin.cdn.seghedi.com/logos/sigla_dgaspc.png\"],[14,5,\"height: 40px;\"],[14,\"alt\",\"\"],[14,0,\"mx-auto mb-4\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"flex flex-row justify-center mb-4 -ml-4 -mr-4\"],[12],[1,\"\\n          \"],[10,3],[14,6,\"https://www.facebook.com/cjearges\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"path\"],[14,\"d\",\"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,3],[14,6,\"https://www.instagram.com/cjearges/\"],[14,\"target\",\"_blank\"],[14,0,\"p-4 text-red-700 hover:text-red-400\"],[12],[1,\"\\n            \"],[10,\"svg\"],[14,0,\"fill-current\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 16 16\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n              \"],[10,\"g\"],[12],[1,\"\\n                \"],[10,\"circle\"],[14,\"cx\",\"12.145\"],[14,\"cy\",\"3.892\"],[14,\"r\",\"1\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n                \"],[10,\"path\"],[14,\"d\",\"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z\"],[14,\"fill\",\"currentColor\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex flex-col justify-between mb-8 text-center sm:flex-row\"],[12],[1,\"\\n        \"],[10,2],[14,0,\"order-last mb-4 text-sm text-gray-500 sm:order-first\"],[12],[1,\"\\n          Designed by\\n          \"],[10,3],[14,6,\"https://cjearges.ro/\"],[14,0,\"text-white\"],[12],[1,\"CJE Argeș\"],[13],[1,\". Coded by\\n          \"],[10,3],[14,6,\"https://seghedi.com/\"],[14,0,\"text-white\"],[12],[1,\"Robert Seghedi\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,0,\"px-4 text-gray-500 hover:text-white\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\",\"link-to\"]]",
    "moduleName": "bullyin/templates/notfound.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("bullyin/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("bullyin/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("bullyin/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("bullyin/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('bullyin/config/environment', [], function() {
  var prefix = 'bullyin';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("bullyin/app")["default"].create({"name":"bullyin","version":"0.0.0+b1e55f46"});
          }
        
//# sourceMappingURL=bullyin.map
