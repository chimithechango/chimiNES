chimiNES

chimiNES is a lightweight, browser-based NES emulator built with HTML, CSS, and JavaScript, using JSNES as its backend for NES emulation. its a customizable frontend with JavaScript-based emulation to bring classic NES gaming to the browser without requiring a traditional installation or build process.

the frontend provides an interactive interface for loading ROMs, configuring controls, adjusting display settings, and managing experimental features. JSNES handles the core NES emulation, while chimiNES builds on top of it with additional interface customization, rendering options, and input functionality.

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
