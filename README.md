# angularMaterial-news

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Run the project

- Run `npm install` to install packages

## Development server

- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

## Build

- Run `ng build` to build the project
- The build artifacts will be stored in the `dist/` directory
- Use the `--configuration production` flag for a production build
- The `--prod` flag is deprecated, and we must now use `--configuration production` flag

## Description

- User is getting data from APIs and mock data
- Navigation is displayed via Angular Material Toolbar
- User is able to switch between 2 News categories via Angular Material Button Toggle Group
- News articles contain: title, description, author, date of publish, image (if has one) and URL to original post
- User is able to search News articles by keywords via custom FilterPipe (replacement for Ng2 Search Filter)
- News articles are filtered by language & category
- News articles can be sorted - ASC or DESC (manual refresh required to fetch new data)
- News articles are displayed via Angular Material Card
- Original News articles can be seen via Angular Material Button
- User can view Reporters via Angular Material Table & Dialog on large screens and it's details via Angular Material Expansion Panel on mobile screens
- User can choose not to see Reporter details (pop-up) Dialog via Angular Material Slide toggle
- User can view Workers via Angular Material Selection List
- User can view Worker Flights via Angular Material Sidenav and Angular Material Card
- User can copy Worker Flights number via Clipboard
- Worker Flights are modified with custom and build-in Angular pipes
- User can switch between English and Serbian language via Angular Material Menu
- Content is translated via Transloco Service
- Project is using Angular Flex Layout and custom styles
- Full-page background images with semi-transparent content cards
- Mobile preview toggle on desktop for testing responsive design

## Project is using APIs from

- `https://mediastack.com/`
- `https://jsonplaceholder.typicode.com/`

## Installed packages

- Angular Material 17
- Angular Flex Layout
- Material Icons
- Custom FilterPipe (replaces deprecated Ng2 Search Filter)
- Transloco Service

## Installed Angular Material components

- Toolbar
- Button Toggle Group
- Table
- Dialog
- Menu
- Expansion Panel
- Selection List
- Sidenav
- Clipboard
- Card
- Slide toggle
- Progress spinner
- Input
- Button
- Icon

## Changelog

### Latest Update (March 2026)

- Upgraded from Angular 11 to Angular 17
- Replaced Ng2 Search Filter with custom FilterPipe
- Updated TypeScript target to ES2022
- Fixed zone.js import compatibility
- Replaced Tabs with Button Toggle Group for better UX
- Added full-page background images to News, Reporters, Flights pages
- Fixed Mixed Content error (http → https for Netlify)
- Added manual refresh button for news to save API calls
- Changed navigation order: Reporters → Flights → News
- Changed default home page to Reporters
- Added mobile preview toggle button for desktop users
- Changed reporters background image to microphone/recording studio
- Fixed media query breakpoint (96rem → 960px)
- Increased icon sizes throughout the app
- Set base font-size to 10px (1rem = 10px)
- Created shared SCSS mixins for DRY styling
- Added larger card sizes (30rem) and title fonts (2.2rem)
