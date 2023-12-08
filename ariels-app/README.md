# Process Documentation for Ariel's Beauty App

Welcome to the process documentation for Ariel's Beauty App. This document provides a comprehensive guide to building and deploying the app, along with explanations of key components and their interactions.

## Table of Contents

- [Home](#home)
- [Contact](#contact)
- [Services](#services)
- [Booking](#booking)
- [Payment](#payment)
- [Components](#components)

## [Home](src/pages/Home.jsx)

In the Home section, we have used the `Subtitle` and `ServiceCards` components to create an engaging user experience.

### [Subtitle Component](src/components/Subtitle.jsx)

The `Subtitle` component takes a 'title' prop and displays it between two lines.

```jsx
<Subtitle title="Welcome to Ariel's Beauty App" />
```

### [ServiceCards Component](src/components/ServiceCards.jsx)

The `ServiceCards` component iterates over data sourced from our `DataProvider`, which retrieves information from Firebase Firestore.

```jsx
<ServiceCards
service={service}
showMore={showMore}
setShowMore={setShowMore}
/>
```


## [Contact](src/pages/Contact.jsx)

To facilitate user inquiries, the Contact section incorporates a form powered by `emailjs`. Users can send an email, including their name, phone number, type of inquiry, and a message.

```jsx
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templatId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
```

## [Services](src/pages/Services.jsx)

In the Services section, a slider has been integrated using `splidejs`, enabling users to click on a service. This action renders the corresponding service on the page through the ServiceCards component.

```jsx
<SplideSlider 
items={slide} 
onItemClick={handleSliderItem} 
/>
```

### ServiceCards Component(Revisited)

While developing the services page, I encountered an issue. The problem arises when a service from the slider is clicked, as the button in the card component remains in the "true" state if it was clicked while a user was viewing a different service.

To address the issue, I've enhanced the ServiceCards component to manage the 'showMore' state more effectively.

```jsx
<ServiceCards
  services={service}
  showMore={showMore}
  setShowMore={setShowMore}
/>
```

### Card Component(Revisited)

The Card component now includes two new props: `detailedDescription` for additional service information, and `serviceType` to manage unavailable times for the service through Firebase.

```jsx
<Card
  ...
  detailedDescription={item.detailedDescription}
  serviceType = {"Featured"}
/>
```

## [Booking](src/pages/Booking.jsx)

In the booking page, the `Calendar` component and `BookingContext` are utilized.

### [BookingContext](src/components/BookingContext.jsx)

`BookingContext` is employed to transmit data from the card component to the Booking page when the 'book' button is clicked.

```jsx
// BookingContext.jsx
<BookingContext.Provider value={{ bookingData, setData }}>
  {children}
</BookingContext.Provider>

// Card.jsx
<Link
  to="/booking"
  onClick={() => setData(title, price, image, imageAlt, id, serviceType)}
>
  Book
</Link>
```

### [Calendar Component](src/components/Calendar.jsx)

`Calendar` is responsible for selecting dates and times for the booking.

In the `Calendar` component, we incorporate react-datepicker, calendarContext, and various functions from Firebase Firestore.

`calendarContext` is employed to transfer data from the `Calendar` component to the `payment` page.

Two crucial aspects of the Calendar component are the includeTimes and excludeTimes props in the DatePicker component.

IncludeTimes

The `includeTimes` prop accepts an array of date objects. We initialize a state for time slots.

```jsx
// Calendar.jsx
const [timeSlots, setTimeSlots] = useState([]);
```

In the `generateAvailableTimeSlots` function, we check the `excludedTimes` variable, derived from the `getUnavailableTimesForSelectedDay` function. If `excludedTimes` is an empty array, we loop from 7 to 19 (excluding times 12 and 13), add the times to a times array, and update/set the time slots using our state update function. We ensure that date objects are added to the arrays. If `excludedTimes` is not an empty array we loop from 7 to 19 (excluding times 12,13, and times in the `excludedTimes` array).

```jsx
// Calendar.jsx
const generateAvailableTimeSlots = () => {
  const excludedTimes = getUnavailableTimesForSelectedDay().filter(
    (time) => time instanceof Date
  );

  const times = [];

  for (let i = 7; i < 20; i++) {
    if (
      i !== 12 &&
      i !== 13 &&
      (!excludedTimes.length ||
        !excludedTimes.some((time) => time.getHours() === i))
    ) {
      let time = setHours(setMinutes(startDate, 0), i);
      times.push(time);
    }
  }
  setTimeSlots(times);
};
```
We fetch unavailable times from the specific service in Firestore using the `serviceType` and `serviceId` props. The `onSnapshot` function is employed to detect changes to the data in the `UnavailableTimes` subcollection. Whenever there's a change, `generateAvailableTimeSlots` is executed based on the new unavailable times.

```jsx
// Calendar.jsx
useEffect(() => {
  const unsubscribe = onSnapshot(
    collection(
      db,
      `Services/Root/${serviceType}/${serviceId}/UnavailableTimes`
    ),
    (snapshot) => {
      try {
        const times = snapshot.docs.flatMap((dateDoc) => {
          const date = dateDoc.id;
          const parsedDate = parse(
            date,
            "MMM EEE d, yyyy - h:mm aa",
            new Date()
          );
          return parsedDate;
        });
        generateAvailableTimeSlots();
      } catch (error) {
        console.error(
          "Error in onSnapshot callback, Calendar Component:",
          error
        );
      }
    }
  );
  return () => unsubscribe();
}, [serviceType, serviceId, startDate]);
```


## [Payment](src/pages/Payment.jsx)


## [Components](src/components)

Let's explore the custom components that make up Ariel's Beauty App.

### Navigation

The Navigation component provides navigation links using React Router's `Link`.

```jsx
<li> <Link to="/"> Home </Link> </li>
```

`Link` was used to establish connections to various pages such as Home, About, and more, when clicked.

### Hero

The Hero component accepts both a "title" and a "className" prop, utilizing them to display text over an image and apply custom styling, respectively.

```js 
<Hero title='Contact' className="mt-5 font-sans">
```

### Subtitle

The Subtitle component accepts a "title" prop, which it uses to display the title between two lines.

```jsx
<Subtitle title="Discover Our Services" />
```

### Card

The Card component presents service information and includes a button to show more details or book the service.

```jsx
<Card
  title="Manicure & Pedicure"
  image={braids}
  imageAlt="Manicure & Pedicure"
  description="Pamper your hands and feet with our luxurious manicure and pedicure services."
  price="$40"
  detailedDescription="Our expert technicians will treat your hands and feet with the care they deserve."
  key= {1}
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

```jsx
{
  service.map((item) => (
    <Card
      title={item.title}
      image={item.image}
      imageAlt={item.imageAlt}
      description={item.description}
      price={item.price}
      detailedDescription={item.detailedDescription}
      key={item.id} // unique key for each Card component
      showMore={showMore} // Boolean indicating whether to show more details
      setShowMore={setShowMore} // Function to update the 'showMore' state
    />
  ));
}
```

### Slider

The Slider Component uses `Splidejs` which is a lightweight, flexible and accessible slider/carousel written in TypeScript.

The Slider Component takes in two props:

- items - An array of items that will be displayed in the slider.
- onItemClick - A function that will be triggered when an item in the slider is clicked.

```jsx

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
  )
```

This component is designed to create a dynamic slider using the Splide library. Each slide displays an image and a label, and clicking on a slide triggers the onItemClick function while passing specific arguments from the item.service array.