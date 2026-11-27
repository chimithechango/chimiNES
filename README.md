 <img width="636" height="327" alt="B" src="https://github.com/user-attachments/assets/7600cfa7-ce19-410e-bf89-39bf3b8eb5cd" />


chimiNES

[PORTION OF THE UI IN THIS PROGRAM WAS CREATED WITH THE ASSISTANCE OF ARTIFICIAL INTELLIGENCE]

chimiNES is a lightweight, browser-based NES emulator built with HTML, CSS, and JavaScript, using JSNES as its backend for NES emulation. its a customizable frontend with JavaScript-based emulation to bring classic NES gaming to the browser without requiring a traditional installation or build process.

the frontend provides an interactive interface for loading ROMs, configuring controls, adjusting display settings, and managing experimental features. JSNES handles the core NES emulation, while chimiNES builds on top of it with additional interface customization, rendering options, and input functionality.

what's new in the remaster

webgpu display pipeline: the game screen is drawn by a WGSL shader on the GPU. it handles sharp pixel scaling, scanlines, screen curvature, a phosphor mask, bloom, vignette, color fringing and every color mode in one pass. browsers without webgpu fall back to canvas 2d automatically (with scanlines, vignette and color modes).

effect presets: clean, soft crt, crt and arcade, each with sliders to fine-tune.

launcher layout (steam / epic style): a sidebar with navigation, a searchable game list and a "now playing" card; a library page with a featured-game banner and a grid of cover cards (covers come from your latest save screenshot); a now playing page with the screen, control dock and that game's save states; and a save states page grouped by game. leaving a game pauses it, coming back resumes it. settings live in a drawer you can keep open while watching effects change live.

save states with thumbnails, relative timestamps and one-key shortcuts (F2 save, F4 load).

game details (steam-style properties): click the pencil on a game card, the banner, or "game details" while playing, or right-click a game. set a custom title, cover art, banner, developer, year, genre, description and favorite. cover and banner images can be uploaded, dropped in, or captured from the game screen or a save screenshot; you can also drop an image straight onto a game card. favorites get a star and a "favorites first" sort, and search matches titles, genres, developers and years.

steamgriddb artwork: search steamgriddb right from game details and pick a cover or banner from community artwork. new games can get their cover, banner, official title and year automatically, and settings → artwork has a "find artwork for all games" button. players only need a free steamgriddb api key (steamgriddb.com → preferences → api).

site owner, one-time setup: steamgriddb doesn't accept calls straight from web pages, so chimiNES talks to it through a tiny relay. deploy it once with `npx wrangler deploy` inside steamgriddb-proxy/ and put the printed url in `DEFAULT_SGDB_PROXY` near the top of the steamgriddb section in index.html. see steamgriddb-proxy/README.md.

28 full themes: every original chimiNES theme (neon blue is still the default) plus steam deck, epic night, synthwave, famicom, pocket green, paper and snow. each theme recolors the whole interface, not just the accent. the classic glowing-panel look is back as the "glow" style, with a "flat" style as an option. ambient glow lights the page with the game's colors.

bug fixes: typing in the cheat boxes no longer triggers game buttons (letters like A, S, Z, X were blocked), keys no longer get stuck when the window loses focus, the "auto-start" toggle actually works now, audio latency stays capped at high speeds, the emulator no longer spirals when it falls behind, autosave no longer reads the whole database every second, a failed rom load no longer leaves the previous game half-broken, and switching games autosaves the one you were playing.

features

JSNES integration: uses the JSNES JavaScript library to emulate NES hardware and run compatible games in the browser.

ROM importing: load compatible .nes ROM files directly through the interface.

experimental zapper support: uses mouse input for light-gun interactions in games that use the zapper.

customizable themes: includes a LOT of ui themes.

display scaling: offers multiple scaling levels for adjusting the game viewport.

playback speed controls: adjust emulation speed using a range of playback multipliers.

color rendering: includes monochrome, sepia, color-vision simulations, high contrast, and inverted colors.

fullscreen mode: expand the game viewport for a more immersive experience.

keyboard controls: interact with games using keyboard input.

theme-aware interface: adapts panels, buttons, dropdowns, and other interface elements to the selected theme.

crt mode: an overlay that mimics the look of a classic crt television.

backend and architecture

chimiNES uses a client-side architecture built around three core technologies:

HTML: provides the application structure and user interface.

CSS: controls the visual design, themes, layout, and responsive interface elements.

JavaScript: manages application logic, JSNES integration, ROM loading, input handling, playback speed, screen scaling, and rendering-related settings.

JSNES serves as the underlying emulation engine, responsible for simulating the NES system. chimiNES provides the surrounding application layer, connecting emulator functionality to the user interface and adding features such as experimental mouse-based Zapper input, customizable themes, and display options.

the application is designed to run in a modern web browser, with no dedicated backend server required for its core functionality.

getting started

download the repository.

open the main HTML file in a compatible web browser.

import a compatible NES ROM through the built-in interface.

customize the theme, display scaling, playback speed, and controls.

start playing.

project goals

chimiNES aims to make NES emulation accessible directly in the browser while expanding on the standard emulation experience through interface customization, flexible display settings, and experimental input features.

notes

commercial game ROMs are NOT included, you have to source them yourself.

users are responsible for ensuring they have the right to use the ROMs they load.

JSNES and other third-party libraries or assets retain their respective licenses and attribution requirements.

game compatibility and experimental features may vary depending on the ROM and browser.

if there are any bugs then submit an issue and i'll fix it.
