# A2 Feedback

## Marking Scheme

For each criteria, you will get either a **[Y/N]**.

**Y => Yes**, as in you met the criteria.

**N => No**, as in you did not meet the criteria.

For the code design portion, we will be looking at the following checklist.
It is not limited to these criteria, however this is a guideline for the things we looked for.

## Code Design General Checklist:

We will be **looking for code smells** in this section as the purpose of this course is to teach **good code design** principles.

The reason we teach **design patterns** is that they typically help to **reduce code smells** (except Singleton, we don’t mess with that one).

However, having **design patterns is not mandatory** for this assignment, if they have **zero design patterns but at the same time their code is splendid**, they should get full marks (this may be difficult to achieve).

### Code Smells List

-   Duplicate Code (most important to avoid)

-   Magic Numbers

-   Bad variable names (if they're egregious; 'i' for a loop counter is fine, 'i' for a variable that tracks balance is not)

-   Encapsulation (shouldn’t have everything public)

-   Bad Formatting (indentation, line length, inconsistent brackets, etc)

-   Useless comments

-   Overly complex logic (more for loops, ifs than needed, not using loops when possible)

-   Inheritance (should make use of parent/child classes when appropriate)

-   Generally not clean and concise code

## Functionality [ ?? / 25 marks ]

For this section, we have prepared some `daily.txt` files to run on your program to
test for functionality.

This will not be publicly available, as this assignment may get re-used in future offerings, however we will give you feedback on what went wrong to justify your mark.

**Each transaction code is worth 2 marks**, with the **exception of Login and Logout** which is worth 2 marks together.

Apart from the transactions running and modifying the database as we expect it to,
we will also be checking for appropriate error messages upon **invalid transactions**.

These error messages are worth **5 marks**.

> ### Login/Logout [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Create [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Delete [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Sell [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Buy [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Refund [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Addcredit [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Auctionsale [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Removegame [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Gift [ ?? / 2 marks ]
>
> -   The transaction works as expected [2 marks] [ ? ]
> -   Some parts of the transaction work as expected [1 mark] [ ? ]
> -   It doesn’t work properly. [0 marks] [ ? ]

> ### Appropriate Error Messages [ ?? / 5 marks ]
>
> -   Good and detailed error messages for the user. [5 marks] [ ? ]
> -   Decent error messages for the user, but could be improved for better User Experience. [2.5 mark] [ ? ]
> -   Missing or ambiguous error messages which are not helpful. [0 marks] [ ? ]

### Feedback:

-   Not entirely sure which class I needed to run initially.

## Code Architecture [ ?? / 5 marks ]:

> For this one, pick one of the following to mark as [Y]
>
> -   **Perfect**, they grasp the teachings of Michael and Sadia senpais. [5 marks] [ ? ]
> -   **Almost perfect**, slight areas where it can be improved [4 marks] [ ? ]
> -   **Mediocre** job at code design, **notable code smells.** [3 marks] [ ? ]
> -   **Poor job** at code design, **lots of code smells.** [2 marks] [ ? ]
> -   Did not really try to make their code look nice, did the **minimal effort.** [1 mark] [ ? ]
> -   **NaNi?????** If it hurts so bad, just hit ‘em with the **0.** [0 marks] [ ? ]

### Feedback:

-   [insert feedback here]

## Proper Test Suite [ ?? / 10 marks ]:

For each transaction, we want to check for testing of **valid and invalid** inputs.
Particularly, if there are **no tests for invalid inputs**, the **maximum mark** they can get is **5 marks.**

**Test cases for each transaction code is worth 1 marks**, with the **exception of Login and Logout** which is worth 1 mark together.

A general guideline for good testing is that they tested each different input which leads to a different output, and asserts them accordingly.

> ### Login/Logout [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Create [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Delete [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Sell [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Buy [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Refund [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Addcredit [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Auctionsale [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Removegame [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

> ### Gift [ ?? / 1 mark ]
>
> -   Tests valid inputs [0.5 marks] [ ? ]
> -   Tests invalid inputs [0.5 marks] [ ? ]

### Feedback:

-   [insert feedback here]

## Requirements [ ?? / 10 marks ]:

There were a total of 70+ **good clarifications** made on Piazza, so a reasonable total number of clarifications for full marks is **20 good clarifications.**

If there are less than 20 good clarifications, the mark will be **X // 2** where **X** is the number of **good clarifications made**.

We have **5 important clarifications** which must be included.

**For each one** of the following clarifications which is not included, **deduct 1 mark.**

1. The Auctionsale transaction code is **07**.

2. For any mismatched length of transaction lines (ex. Incorrect number of XXX) => Use the numeric specifications outlined in the README, not the character representations of each transaction format.

3. A new 'day' occurs when your backend is executed, not based on any actual date/time

4. Inventories of _items that are bought_ **are treated differently** than lists of _items up for sale._

5. A full standard user cannot sell a game that they have purchased; the games that they have bought and sold must be tracked separately.

> -   Contains at least **20 good clarifications.** [ ?? / 10 marks ] [ ? ]
> -   Contains at least **X < 20 good clarifications.** [ X // 2 marks ] [ ? ]

### Feedback:

-   [insert feedback here]

## Documentation [ ?? / 5 marks ]:

Contains complete and well written JavaDocs.

> -   Mostly **well-done**, with minor issues. [5 marks] [ ? ]
> -   **Some parts well-done** or at least a **good attempt**, other parts have major issues (missing or incorrect format). [2.5 marks] [ ? ]
> -   All or almost all javadocs are **completely wrong or missing.** [0 marks] [ ? ]

### Feedback:

-   [insert feedback here]

## Use of Scrum [ ?? / 5 marks ]:

> -   A generally well-organized product backlog, that clearly follows scrum and has **all or almost all** the required info, may have minor issues but overall is good. [5 marks] [ ? ]
> -   Clear attempt to do the above (beyond starter example), but **has issues** [2.5 marks] [ ? ]
> -   **No attempt or extremely poor** attempt to do the above [0 marks] [ ? ]

### Feedback:

-   [insert feedback here]

## Use of Git [ ?? / 5 marks ]:

> -   **Perfectly** follows the workflow in the A2 README handout [5 marks] [ ? ]
>     -   Uses properly named branches for each task
>     -   Has useful commit messages
>     -   Has multiple commits throughout the assignment work period rather than all at the end
>     -   May have some minor issues, but overall pretty gucci.
> -   Clear attempt to do the above, but has notable issues. [2.5 marks] [ ? ]
> -   Git is not used well at all. [0 marks] [ ? ]

### Feedback:

-   [insert feedback here]

## Bonus [ ?? / 10 marks ]:

### Extra Features [ ?? / 5 marks ]:

> -   At least **one good and unique** bonus feature which works as specified in FEATURES.md
> -   If the bonus feature is incomplete or does not function as expected, no marks will be given.

### Frontend [ ?? / 10 marks ]:

> -   The frontend is **“awe inspiring”, GUI, and generates a valid daily.txt** for the backend to process [10 marks]
> -   A fully functioning frontend which can either be a GUI or CLI.
> -   Must generate a daily.txt (**0 marks if it does not**)
> -   **Error checks inputs** when appropriate
> -   Provides **user feedback** upon valid and invalid (if possible) inputs.
> -   Database manipulation directly from the frontend is **0 marks**

### Feedback:

-   [insert feedback here]

## Final Adjustments (up to 20% boost/deduction)

As we know, group assignments can be difficult and as such, we had students fill out Peer Evaluations to see if there was a clear imbalance in workload.

If we deem that some group members were not productive and did not contribute to the group project, we will make adjustments as necessary.

The **maximum total adjustment is 20%**, this means if 1 person did not do work, and 3 people did, then the person who did not do work will be **deducted 20%** and the 3 people who did do work will be **boosted by 20/3 %** each.

The total deduction and boost must match.

### Adjusted marks

#### Total Unadjusted: /100

##### [UTORID1] : /100

##### [UTORID2] : /100

##### [UTORID3] : /100

##### [UTORID4] : /100
