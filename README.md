# Viewport Grid

## Insallation Instructions

1. Clone the repo by clicking the "<> clone" button.
2. Copy the HTTPS URL.
3. Open a terminal of your choice.
4. Change the current working directory to the location where you want the cloned directory.
5. Type git clone and then paste the repo HTTPS URL.
6. Press enter to create your local clone.
7. Open the project folder in your IDE.
8. CD into the working directory.
9. Run 'npm install' to install all dependencies.
10. Run in development mode using 'npm start'.
11. Use npm test to run all test suites.

## Technologies used

- React
- TypeScript
- SASS
- React Testing Libary/Jest

## Requirements

Using the provided project template I was able to meet the requirements of this test. The app contains a grid of viewports that are all uniform in size with a fixed sidebar that is able to collapse and expand by clicking a button. The sidebar correctly contains a "Rows" and "Columns" input that allows a range of numbers between 1-10. Changing the input values updates the number of viewports to match the inputted values. For example, if a user inputs 4 into the columns input, 4 column viewports will be displayed in the grid. All viewports fit the remaining space and have a thin border. Furthermore, each viewport is aware of it's size at all times and this is printed in the center as a width and height value. The grid is fully responsive and the displayed width and height values are updated on re-sizing the browser window and expanding/collapsing the sidebar. I finished off the project by changing the example colours to ensure a clean and modern UX as suggested.

In this app I have also included appropriate unit tests to ensure that the rendering and functionality work as they should.

No additional NPM packages were installed to complete this test.

The app works correctly against the latest version of Chrome, Firefox and Edge.

## Challenges that I faced

Overall, I was fairly comfortable building this app. However, I did come across a couple of challenges along the way. I managed to get to a point in the app where when I used the input to add new rows or columns, the width and height values of each individual viewport would update correctly. On the other hand, when removing rows or columns, the width and height values of the viewports would not update. This left me a bit confused as the state values for the rows and columns were updating correctly and therefore causing my useEffect to re-run. I eventually found out that the problem was to do with the fact that I had assigned my useRef to multiple elements and that I actually should have created an individual ref for each one. Consequently, I did some refactoring and managed to get the result that I was looking for.

Another challenge I faced was trying to write a test to assert that the offsetWidth and offsetHeight values of the viewport change when the browser is resized. I began writing a test but unfortunately the width and height values would always return 0 before and after the resize event. After doing some research, I began to realise that this test might not be possible to run using jest-dom as it does not have the layouting capabilities of a browser. A tool such Cypress or Playwright would be a better solution for this test case.
