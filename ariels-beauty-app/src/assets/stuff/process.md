# Process Documentation for Ariel's Beauty App

This document outlines the step-by-step process of building and deploying this app.

## Table of Contents

- [Home](#home)
- [About](#about)
- [Contact](#contact)
- [More](#more)
- [Services](#services)
- [Components](#components)

## Home

I've encountered two minor issues: the first one is that the text in the hero section isn't displaying as I would prefer. I've experimented with relative units like 'rem' and percentages. Here's my solution:

```css
h3 {
  position: absolute;
  top: 33%;
  right: 2rem;
  width: 15rem;
}
```
And the second issue is related to the navigation transitions. While the fade-in transition is currently working as intended, the fade-out transition isn't functioning as expected.

## About

## Contact

## More

## Services

## Components

So far I've developed four components: Card,Footer,Subtitle,and Navigation.

### Navigation

In this component I used `useState` from React and `Link` from React Router.

`useState` was used to toggle the visibility between the hamburger menu icon and the X icon.

```js
// Sets the variable menuIsVisible to a false state
const [menuIsVisible, setMenuIsVisible] = useState(false);

// Updates menuIsVisible
const toggleVisibility = () => setMenuIsVisible(!menuIsVisible);

// X icon is set to false/true based on condition
{menuIsVisible && <i className="bi bi-x-lg w-8"></i>;}
```

`Link` was used to establish connections to various pages such as Home, About, and more, when clicked.

```js
<Link to="/"> Home </Link>
```

### Subtitle

The Subtitle component accepts a "title" prop, which it uses to display the title between two lines.

```js
<h2>{props.title}</h2>
```

### Card

The Card component accepts multiple props: 'image', 'imageAlt', 'title', and 'description'. Additionally, it makes use of the Link component from React Router to establish a connection for accessing more information about the style on the "More" page. These props are utilized to present customized inputs.

```js
<img src={props.image} alt={props.imageAlt} />
<h4>{props.title}</h4>
<p>{props.description}</p>
<Link to="/more">More</Link>
```

### Footer

The Footer component displays the logo, location, and phone number for the user.

### ServiceCards

### ServiceIcon