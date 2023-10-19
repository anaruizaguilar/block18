//Unit Tests
// 1. A function called "multiplication" that returns the product of the two input numbers.
    //Expect multiplication(3, 9) to return a number
    //Expect multiplication(4,7) to return 28
    //Expect multiplication(b, 5) to be an error
// 2. A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
    //Expect concatOdds to return a single array of numbers
    //Expect the numbers in the new array produced by concatOdds to be only odd numbers
    //Expect the numbers in the new array produced by concatOdds to be in ascending order
    //Expect the new array produced by concatOdds to contain numbers present in both the input arrays
    //Expect concatOdds([3,2,9,1,3,5], 2,3,8,6,1,9) to be an error
    //Expect concatOdds([0,0,0], [2,4,6]) to return null
    //Expect repeating numbers in the input arrays to show up only once in the new array produced by concatOdds

//Functional Tests
//A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. 
//They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
    //There will be no "checkout" button present if the user's shopping cart is empty.
    //User can click/see the cart even if the cart is empty, but they will receive an alert that the cart is empty
    //When user has items present in the cart and hits "checkout", they will be prompted to log in to their account, create a new account, or check out as guest
    //If user selects to check out as guest, they will be taken directly through the checkout process.
        //CHECKOUT PROCESS:
        //User will see a form where they will be able to enter their contact info (name, email address, optional phone number), shipping address, and billing address
        //User will receive options for shipment method and be able to select only one.
        //User will receive options for payment method and be able to select only one.
            //If user selects to use credit card/debit card/bank account, they will see a form where they can enter their card/bank account info
            //If user selects to use Paypal (or other third party service), it will prompt a seperate tab or window to appear where they can log into their Paypal account
                //Once user has successfully logged on to Paypal and chosen their payment method, they will be able to click a button to return to the checkout page.
                //If user is unable to log into Paypal account, they can close the separate window/tab to return to the checkout page and choose another option.
        //User will be unable to press "confirm order" button unless all required fields (contact info, shipment method, shipping/billing address, and payment method) are complete.
        //When all required fields are complete and user selects "confirm order", they will be taken to another page displaying all their inputs. 
        //There will be another "confirm order" button at the bottom of this new page displaying the inputs that the user can select to process the order. 
        //After confirming the order, the website will process the order and send a message to the user confirming that the order is being processed.
        //Website will also send an email and/or text to the user with the confirmation, receipt, and details of the order (inluding tracking info).
        //END OF CHECKOUT PROCESS.
        //Website will prompt the user once more with the option to create an account. Prompt will include incentives to creating an account such as:
            //faster checkout through saved inputs
            //ability to review past orders
            //future discounts
            //loyalty rewards points
    //If user enters log in info (username and/or email address + password) successfully, they will be taken through the CHECKOUT PROCESS above.
        //HOWEVER, if user has made purchases in the past, the inputs for contact info, shipping/billing address will be pre-filled with the ability to edit if info has changed.
        //the user will also be able to select any saved payment methods used in the past 
            //If user enters incorrect login info, they will receive a message that the login attempt has failed.
                //User will then see links to possible root causes for the login failure:
                     //forgot username?
                    //forgot password?
                    //create new account
                //If user chooses either "forgot username/forgot password" they will be prompted to enter their email address.
                //If there is no account with the email address provided, the user will be prompted to create a new account.
                //If an account does exist under the provided email address, website will send an email to user with correct username and/or a link to reset their password
    //If user does not have an existing account, they will select "create new account"
        //User will be taken to a page with fields for them to enter contact info (name, email address, optional phone number)
        //User will also be able to select one or both options through checkboxes to:
            //receive updates about new products
            //receive alerts about orders 
        //User will be prompted to read Terms and Conditions and select "Agree" to complete account creation
        //User will then proceed to the CHECKOUT PROCESS and will have the ability to save inputs for shipping/billing address, as well as payment methods
        
