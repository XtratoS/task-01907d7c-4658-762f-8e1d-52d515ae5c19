# Implementation Strategies

## Project Structure

Followed Sveltekit's conventions as per their documentation.

## Rendering

Since this is a static application, I disabled Server Side Rendering (which requires a server) and enabled Prerendering (which builds the page in advance).

## Data Storage

Used **Local Storage** to store the pin location.
Add functionality to data stores to automatically update **Local Storage** whenever the pin location changes.

## Responsiveness

It was required that the final application would run on both mobile and computer devices, so I used the "Toggle device toolbar" button from Chrome DevTools ![1720135853928](image/STRATEGIES/1720135853928.png)

Used mediaquery to modify the appearance of the Latitude and Longitude on the top right part of the page.

| Desktop                                            | Mobile                                             |
| -------------------------------------------------- | -------------------------------------------------- |
| ![1720136053478](image/STRATEGIES/1720136053478.png) | ![1720136109816](image/STRATEGIES/1720136109816.png) |

## Real-time User Location

I utilized the **Geolocation API** to get the user's location in real time, and enable the user to place the pin in their realtime location by the press of a button ![1720165183796](image/STRATEGIES/1720165183796.png)
