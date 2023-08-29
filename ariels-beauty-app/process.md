# Process Documentation for Ariel's Beauty App

Welcome to the process documentation for Ariel's Beauty App. This document provides a comprehensive guide to building and deploying the app, along with explanations of key components and their interactions.

## Table of Contents

- [Home](#home)
- [About](#about)
- [Contact](#contact)
- [Services](#services)
- [Components](#components)

## Home

In the Home section, we have used the Subtitle and ServiceCards components to create an engaging user experience.

## Subtitle Component

The Subtitle component takes a 'title' prop and displays it between two lines.

```jsx
<Subtitle title="Welcome to Ariel's Beauty App" />
```

## ServiceCards Component

The ServiceCards component iterates over an array of service objects and displays them in card format. Each card accepts various props like 'title', 'image', 'description', and more.

```jsx
<ServiceCards services={service} />
```

## About

## Contact

For user inquiries, the Contact section provides relevant contact details. This section require the Hero component which accepts a 'title' prop.

```jsx
<Hero title='Contact' />
```

## Services

In the Services section, users can explore the range of beauty services that's offered.

## ServiceCards Component(Revisited)

While developing the services page, I encountered an issue. The problem arises when a service from the slider is clicked, as the button in the card component remains in the "true" state if it was clicked while a user was viewing a different service.

To address the issue, I've enhanced the ServiceCards component to manage the 'showMore' state more effectively.

```jsx
<ServiceCards
  services={service}
  showMore={showMore}
  setShowMore={setShowMore}
/>
```

## Card Component(Revisited)

The Card component now includes a feature to show additional details about a service and a button to book the service.

```jsx
<Card
  title={item.title}
  image={item.image}
  imageAlt={item.imageAlt}
  description={item.description}
  price={item.price}
  detailedDescription={item.detailedDescription}
  showMore={showMore}
  setShowMore={setShowMore}
/>
```

## Components

Let's explore the custom components that make up Ariel's Beauty App.

### Navigation

The Navigation component provides navigation links using React Router's `Link`. It also includes a dynamic menu toggle using `useState`.

```js
// Sets the variable menuIsVisible to a false state
const [menuIsVisible, setMenuIsVisible] = useState(false);

// Updates menuIsVisible
const toggleVisibility = () => setMenuIsVisible(!menuIsVisible);

// X icon is set to false/true based on condition
{
  menuIsVisible && <i className="bi bi-x-lg w-8"></i>;
}
```

`Link` was used to establish connections to various pages such as Home, About, and more, when clicked.

```js
<Link to="/"> Home </Link>
```

### Hero

The Hero component accepts a "title" prop, which it uses to display over an image.

```js 
<Hero title='Contact'>
```

### Subtitle

The Subtitle component accepts a "title" prop, which it uses to display the title between two lines.

```js
<Subtitle title="Discover Our Services" />
```

### Card

The Card component presents service information and includes a button to show more details or book the service.

```js
<Card
  title="Manicure & Pedicure"
  image={braids}
  imageAlt="Manicure & Pedicure"
  description="Pamper your hands and feet with our luxurious manicure and pedicure services."
  price="$40"
  detailedDescription="Our expert technicians will treat your hands and feet with the care they deserve."
  showMore={showMore}
  setShowMore={setShowMore}
/>
```

### Footer

The Footer component displays essential contact information and the logo.

### ServiceCards

The ServiceCards component dynamically renders service cards using data from the 'services' prop.

The ServiceCards component takes three props:

- service
- showMore
- setShowMore

The service prop is an array of objects that holds the content that will be rendered inside the Card component like title,image and description.

The showMore prop is a boolean indicating whether to show more details about the service

The setShowMore prop is a function that updates the showMore state

```js
{
  service.map((item, index) => (
    <Card
      title={item.title}
      image={item.image}
      imageAlt={item.imageAlt}
      description={item.description}
      price={item.price}
      detailedDescription={item.detailedDescription}
      key={index} // unique key for each Card component
      showMore={showMore} // Boolean indicating whether to show more details
      setShowMore={setShowMore} // Function to update the 'showMore' state
    />
  ));
}
```

### Slider

The Slider Component uses Splidejs which is a lightweight, flexible and accessible slider/carousel written in TypeScript.

The Slider Component takes in two props:

- items - An array of items that will be displayed in the slider.
- onItemClick - A function that will be triggered when an item in the slider is clicked.

```js

const splideOptions = {
    perPage: 4,
    focus: 0,
    omitEnd: true,
  };

  return (
    <Splide options={splideOptions}>
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <div onClick={() => onItemClick(item.service[1], item.service[2])}>
            <img src={item.service[0]} alt={`${item.service[1]} logo`} />
            <p> {item.service[1]} </p>
          </div>
        </SplideSlide>
      ))}
    </Splide>

```

This component is designed to create a dynamic slider using the Splide library. Each slide displays an image and a label, and clicking on a slide triggers the onItemClick function while passing specific arguments from the item.service array.