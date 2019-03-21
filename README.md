# Philip Jacob - Marvel Frontend Challenge

## Overview
This applications was built according to these guidelines, using a mobile-first approach that emphasises speed.

## Prerequisites
1. Node.js and NPM installed on your local machine

## API set-up

Within this repo is an api folder that contains a script for running a local rest-api and some data.

The server can be started with:

```npm install```

```npm start```

You should now have your API running on port 1337.

## Web set-up

Within this repo is another web folder that contains a script for running a standard react app

The server can be started with:

```npm install```

```npm start```

You should now have your web app running on port 3000.

## Considerations

### Approach

In order to try and help myself not forget any features, I tried to break down this exercise into the following tasks.

- Mobile Navbar (including Search)
- Adaptive navbar
- Hamburger (no functionality)
- Marvel logo nuances (adaptive vs mobile)
- Search component (capable of being used across view types)

Within search, there were the following elements to consider

- What metric to search by? Name? Base? In the end, I made the decision to search first by name and then, in the event of no results found, do a larger full-text search for references
- Input outline
- On hover CSS styling
- On click active 'Hero' namechange
- Populating the search input with the clicked 'hero'
- Accounting for No Results
- Accounting for the logic of the spinner (a surprisingly tricky little bugger!)

### CSS Frameworks

For this task, I deliberately chose to not use any CSS frameworks. Why? Over the last few years I have spent alot of time understanding the benefits of self-prescribed grid systems and boxing. The task presented today was not overly difficult, but it did add a level of complexity to not go down the easier route of using a Semantic or Bootstrap.

### Accessibility

I tried to follow the guidelines prescribed in the [React Accessibility Guidelines](https://reactjs.org/docs/accessibility.html) as much as possible, following wherever possible standards including

- Semantic HTML
- Clear labelling
- Error notification (limited in this instance)
- Focus control
- Mouse and pointer events

As always, there is *so* much more I could do in this area.

### Testing


### Conclusion

In conclusion, I have thoroughly enjoyed this opportunity to interview and complete this exercise. I welcome any and all feedback you may have.
