Marvel Frontend Challenge

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

### To Redux, or not to Redux

To quote the great Dan Abramov, I felt when analyzing this task that ["You might not need Redux"](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367). Given the boilerplate reducer logic that would have applied in this instance, I decided to not use it and instead just vanilla React state.

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

Given the small size of the app, testing was definitely an area I spent a bit of time trying to curate. Shallow enzyme tests aside, I felt the real complexity lay in the mocked API call to the local endpoint was the core to the JEST testing. As with anything, I'm sure I could have (attempted) to implement in a more elegant way.

### Conclusion

In conclusion, I have thoroughly enjoyed this opportunity to interview and complete this exercise. I welcome any and all feedback you may have.
