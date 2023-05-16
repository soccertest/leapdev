 /*
   //TextBox
   await page.getByText('Elements').click();
   await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
   await page.getByPlaceholder('Full Name').click();
   await page.getByPlaceholder('Full Name').fill('John Doe');
   await page.getByPlaceholder('name@example.com').click();
   await page.getByPlaceholder('name@example.com').fill('johndoe@xyz.com');
   await page.getByPlaceholder('Current Address').click();
   await page.getByPlaceholder('Current Address').fill('Sydney,Australia');
   await page.locator('#permanentAddress').click();
   await page.locator('#permanentAddress').fill('Sydney, Australia');
   await page.getByPlaceholder('Current Address').click();
   await page.getByRole('button', { name: 'Submit' }).click();
 
   //Checkbox

   await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
   await page.getByRole('button', { name: 'Expand all' }).click();
   await page.locator('label').filter({ hasText: 'Home' }).getByRole('img').first().click();

   //Radio button
   await page.getByRole('listitem').filter({ hasText: 'Radio Button' }).click();
   await page.getByText('Impressive').click();

   //Web tables
   await page.getByRole('listitem').filter({ hasText: 'Web Tables' }).click();
   await page.getByRole('row', { name: 'Cierra Vega 39 cierra@example.com 10000 Insurance Edit Delete' }).getByTitle('Delete').locator('path').click();
   await page.getByRole('row', { name: 'Kierra Gentry 29 kierra@example.com 2000 Legal Edit Delete' }).getByTitle('Edit').locator('path').click();
   await page.locator('div').filter({ hasText: /^First NameLast NameEmailAgeSalaryDepartmentSubmit$/ }).click();
   await page.getByPlaceholder('First Name').click();
   await page.getByPlaceholder('First Name').fill('John');
   await page.locator('#userEmail-wrapper div').nth(1).click();
   await page.getByPlaceholder('name@example.com').click();
   await page.locator('#userEmail-wrapper div').nth(1).click();
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowLeft');
   await page.getByPlaceholder('name@example.com').press('ArrowRight');
   await page.getByPlaceholder('name@example.com').fill('John@example.com');
   await page.getByPlaceholder('Age').click();
   await page.getByPlaceholder('Age').click();
   await page.getByPlaceholder('Age').fill('56');
   await page.getByPlaceholder('Salary').click();
   await page.getByPlaceholder('Salary').fill('4000');
   await page.getByPlaceholder('Department').click();
   await page.getByPlaceholder('Department').fill('IT');
   await page.getByRole('button', { name: 'Submit' }).click();

   //Buttons
   await page.getByRole('listitem').filter({ hasText: 'Buttons' }).click();
   await page.getByRole('button', { name: 'Double Click Me' }).click();
   await page.getByRole('button', { name: 'Right Click Me' }).click();
   await page.getByRole('button', { name: 'Click Me', exact: true }).click();

   //Links
   await page.getByRole('listitem').filter({ hasText: /^Links$/ }).click();
   const page1Promise = page.waitForEvent('popup');
   await page.getByRole('link', { name: 'Home', exact: true }).click();
   const page1 = await page1Promise;
   const page2Promise = page.waitForEvent('popup');
   await page.getByRole('link', { name: 'HomeXyOGX' }).click();
   const page2 = await page2Promise;
   await page.getByRole('link', { name: 'Created' }).click();
   await page.getByRole('link', { name: 'No Content' }).click();
   await page.getByRole('link', { name: 'Moved' }).click();
   await page.getByRole('link', { name: 'Bad Request' }).click();
   await page.getByRole('link', { name: 'Unauthorized' }).click();
   await page.getByRole('link', { name: 'Forbidden' }).click();
   await page.getByRole('link', { name: 'Not Found' }).click();

   //Broken Links- images
   await page.getByText('Broken Links - Images').click();
   await page.getByRole('link', { name: 'Click Here for Valid Link' }).click();
   await page.getByRole('link', { name: 'Click Here for Broken Link' }).click();

   //Upload and Download
   await page.getByRole('listitem').filter({ hasText: 'Upload and Download' }).click();
   await page.getByLabel('Select a file').click();
   await page.getByLabel('Select a file').setInputFiles('IMG_0877.jpg');
   await page.getByLabel('Select a file').click();


   //Missed dynamic properties


   //Forms
   await page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
   await page.getByRole('listitem').click();
   await page.getByPlaceholder('First Name').click();
   await page.getByPlaceholder('First Name').fill('John');
   await page.getByPlaceholder('First Name').press('Tab');
   await page.getByPlaceholder('Last Name').fill('Doe');
   await page.getByPlaceholder('Last Name').press('Tab');
   await page.getByPlaceholder('name@example.com').fill('john@example.com');
   await page.getByPlaceholder('name@example.com').press('Tab');
   await page.locator('div').filter({ hasText: /^Male$/ }).click();
   await page.getByPlaceholder('Mobile Number').click();
   await page.getByPlaceholder('Mobile Number').fill('2222233333');
   await page.locator('#dateOfBirthInput').click();
   await page.getByRole('option', { name: 'Choose Friday, January 1st, 1960' }).click();
   await page.locator('.subjects-auto-complete__value-container').click();
   await page.locator('#subjectsInput').fill('test form');
   await page.locator('div').filter({ hasText: /^Sports$/ }).click();
   await page.getByText('Reading').click();
   await page.getByText('Music').click();
   await page.getByPlaceholder('Current Address').click();
   //Missed state
   await page.getByPlaceholder('Current Address').fill('Sydney');
   await page.getByPlaceholder('Current Address').click();

   //Widgets-Accordian
   await page.locator('span').filter({ hasText: 'Widgets' }).locator('div').first().click();
   await page.getByRole('listitem').filter({ hasText: 'Accordian' }).click();
   await page.getByText('Where does it come from?').click();
   await page.getByText('Why do we use it?').click();

   //Autocomplete
   await page.getByRole('listitem').filter({ hasText: 'Auto Complete' }).click();
   await page.locator('.auto-complete__value-container').first().click();
   await page.locator('#autoCompleteMultipleInput').fill('green black');
   await page.locator('#autoCompleteMultipleInput').press('Tab');
   await page.locator('#autoCompleteSingleInput').click();
   await page.locator('.auto-complete__value-container').first().click();
   await page.locator('#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container').click();
   await page.locator('#autoCompleteSingleInput').fill('black');
   await page.locator('.auto-complete__value-container').first().click();
   await page.getByRole('listitem').filter({ hasText: 'Auto Complete' }).click();


   //Date Picker
   await page.getByRole('listitem').filter({ hasText: 'Date Picker' }).click();
   await page.locator('#datePickerMonthYearInput').click();
   await page.getByRole('option', { name: 'Choose Tuesday, May 2nd, 2023' }).click();

   //Slider
   await page.getByRole('listitem').filter({ hasText: 'Slider' }).click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();
   await page.getByRole('slider').click();

   //Progress bar
   await page.getByRole('listitem').filter({ hasText: 'Progress Bar' }).click();
   await page.getByRole('button', { name: 'Start' }).click();

   //Tabs
   await page.getByRole('listitem').filter({ hasText: 'Tabs' }).click();
   await page.getByRole('tab', { name: 'Origin' }).click();
   await page.getByRole('tab', { name: 'Use' }).click();
   await page.getByText('WhatOriginUseMore').click();

   //Tool Tips
   await page.getByRole('listitem').filter({ hasText: 'Tool Tips' }).click();
   await page.getByPlaceholder('Hover me to see').click();
   await page.getByPlaceholder('Hover me to see').fill('Nice');
   await page.getByText('Practice Tool TipsHover me to see').click();

   //Menu
   await page.getByRole('listitem').filter({ hasText: /^Menu$/ }).click();
   await page.getByRole('link', { name: 'Main Item 1' }).click();
   await page.getByRole('link', { name: 'Main Item 2' }).click();
   await page.getByRole('link', { name: 'Main Item 3' }).click();

   //Select Menu
   await page.getByRole('listitem').filter({ hasText: 'Select Menu' }).click();
   await page.getByText('Select Option').click();
   await page.getByText('Group 1, option 2', { exact: true }).click();
   await page.locator('#selectOne div').filter({ hasText: 'Select Title' }).nth(1).click();
   await page.getByText('Mr.', { exact: true }).click();
   await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
   await page.locator('#react-select-9-option-1').click();
   await page.locator('#cars').selectOption('opel');


   //Interactions - Sortable
   await page.getByText('Interactions').click();
   await page.getByRole('listitem').filter({ hasText: 'Sortable' }).click();
   await page.getByRole('tabpanel', { name: 'List' }).getByText('Four').click();
   //Can have more sorts here

   //Selectable
   await page.getByRole('listitem').filter({ hasText: 'Selectable' }).click();
   await page.getByText('Cras justo odio').click();
   await page.getByText('Morbi leo risus').click();

   //Resizable
   await page.getByRole('listitem').filter({ hasText: 'Resizable' }).click();
   await page.locator('div').filter({ hasText: /^Resizable box, starting at 200x200\. Min size is 150x150, max is 500x300\.$/ }).first().click();
   await page.locator('div').filter({ hasText: /^Resizable box, starting at 200x200\. Min size is 150x150, max is 500x300\.$/ }).first().click();
   await page.locator('div').filter({ hasText: /^Resizable box, starting at 200x200\. Min size is 150x150, max is 500x300\.$/ }).first().click();
   await page.getByText('Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.').click();
   await page.getByText('Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.').click();
   await page.getByText('Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.').click();
   await page.getByText('Resizable box, starting at 200x200. Min size is 150x150, max is 500x300.').click();
   await page.locator('div').filter({ hasText: /^Resizable box, starting at 200x200\. Min size is 150x150, max is 500x300\.$/ }).first().click();
   await page.locator('#resizable').click();

   //Droppable
   await page.getByRole('listitem').filter({ hasText: 'Droppable' }).click();
   await page.getByRole('tabpanel', { name: 'Simple' }).getByText('Drop here').click();
   await page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable').click();
   await page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable').click();
   await page.getByRole('tab', { name: 'Accept' }).click();
   await page.getByRole('tabpanel', { name: 'Accept' }).locator('#droppable').click();
   await page.getByRole('tabpanel', { name: 'Accept' }).locator('#droppable').click();
   await page.getByRole('tab', { name: 'Prevent Propogation' }).click();
   await page.getByRole('tab', { name: 'Revert Draggable' }).click();
   await page.getByRole('listitem').filter({ hasText: 'Dragabble' }).click();

   //Draggable
   await page.getByText('SimpleAxis RestrictedContainer RestrictedCursor StyleDrag meOnly XOnly YI\'m cont').click();
   await page.getByRole('tab', { name: 'Axis Restricted' }).click();
   await page.getByRole('tab', { name: 'Container Restricted' }).click();
   await page.getByRole('tab', { name: 'Cursor Style' }).click();

   await page.locator('#fixedban').click();
   const page3Promise = page.waitForEvent('popup');
   await page.frameLocator('[id="google_ads_iframe_\\/21849154601\\,22343295815\\/Ad\\.Plus-Anchor_0"]').getByRole('link', { name: 'Sponsored Pour Salt Down Your Drain At Night Read more yourtopdealstoday.com' }).click();
   const page3 = await page3Promise;}); */