# API Routes Documentation

## Overview
This document provides a complete list of all API endpoints available in the Digital Heroes backend application. Routes are organized by module with their HTTP methods, paths, authentication requirements, and descriptions.

---

## Authentication Routes (`/api/auth`)

### 1. Email Verification
- **Method:** `POST`
- **Path:** `/email-verification`
- **Authentication:** None
- **Description:** Verify user email during registration
- **Controller:** `emailverification`

### 2. User Registration
- **Method:** `POST`
- **Path:** `/register`
- **Authentication:** None
- **Description:** Register a new user account
- **Controller:** `registerUser`

### 3. User Login
- **Method:** `POST`
- **Path:** `/login`
- **Authentication:** Required (any role)
- **Description:** Authenticate user and return JWT tokens
- **Controller:** `LoginUser`

### 4. Refresh Token
- **Method:** `GET`
- **Path:** `/refresh`
- **Authentication:** None
- **Description:** Refresh expired JWT token
- **Controller:** `refreshUser`

### 5. User Logout
- **Method:** `GET`
- **Path:** `/logout`
- **Authentication:** Required (any role)
- **Description:** Logout user and invalidate session
- **Controller:** `logout`

### 6. Google Authentication
- **Method:** `POST`
- **Path:** `/register-with-google`
- **Authentication:** None
- **Description:** Register/login user with Google OAuth
- **Controller:** `registerWithGoogle`

---

## Charity Routes (`/api/charity`)

### 1. Get All Charities
- **Method:** `GET`
- **Path:** `/`
- **Authentication:** None
- **Description:** Retrieve list of all charities
- **Controller:** `getAllCharities`

### 2. Get Featured Charities
- **Method:** `GET`
- **Path:** `/featured`
- **Authentication:** None
- **Description:** Retrieve list of featured charities
- **Controller:** `getFeaturedCharities`

### 3. Get Charity by ID
- **Method:** `GET`
- **Path:** `/:id`
- **Authentication:** None
- **Description:** Retrieve charity details by ID
- **Controller:** `getCharityById`

### 4. Create Charity
- **Method:** `POST`
- **Path:** `/create`
- **Authentication:** Required (ADMIN only)
- **Upload:** File upload support (array)
- **Description:** Create a new charity
- **Controller:** `createCharity`

### 5. Update Charity
- **Method:** `PUT`
- **Path:** `/:id`
- **Authentication:** Required (ADMIN only)
- **Upload:** Image upload support (array)
- **Description:** Update charity information
- **Controller:** `updateCharity`

### 6. Delete Charity
- **Method:** `DELETE`
- **Path:** `/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Delete a charity
- **Controller:** `deleteCharity`

### 7. Toggle Charity Status
- **Method:** `PATCH`
- **Path:** `/:id/toggle-status`
- **Authentication:** Required (ADMIN only)
- **Description:** Enable/disable a charity
- **Controller:** `toggleCharityStatus`

### 8. Toggle Featured Status
- **Method:** `PATCH`
- **Path:** `/:id/toggle-featured`
- **Authentication:** Required (ADMIN only)
- **Description:** Mark/unmark charity as featured
- **Controller:** `toggleFeaturedStatus`

---

## Dashboard Routes (`/api/dashboard`)

### 1. Get Dashboard Overview
- **Method:** `GET`
- **Path:** `/`
- **Authentication:** Required (any role)
- **Description:** Get user dashboard overview
- **Controller:** `dashboardOverview`

### 2. Get Admin Dashboard Statistics
- **Method:** `GET`
- **Path:** `/admin/`
- **Authentication:** Required (ADMIN only)
- **Description:** Get comprehensive admin dashboard statistics
- **Controller:** `getDashboardStats`

---

## Draw Routes (`/api/draw`)

### Write Operations (ADMIN ONLY)

### 1. Create Draw
- **Method:** `POST`
- **Path:** `/`
- **Authentication:** Required (ADMIN only)
- **Description:** Create a new draw/lottery
- **Controller:** `createDrawHandler`

### 2. Update Draw
- **Method:** `PATCH`
- **Path:** `/:drawId`
- **Authentication:** Required (ADMIN only)
- **Description:** Update draw details
- **Controller:** `updateDrawHandler`

### 3. Publish Draw Result
- **Method:** `PATCH`
- **Path:** `/publish-result/:drawId`
- **Authentication:** Required (ADMIN only)
- **Description:** Publish results of a completed draw
- **Controller:** `publishDrawResult`

### 4. Update Draw Status
- **Method:** `PATCH`
- **Path:** `/:drawId/status`
- **Authentication:** Required (ADMIN only)
- **Description:** Change draw status (active, completed, cancelled)
- **Controller:** `updateDrawStatusHandler`

### 5. Add Jackpot Rollover
- **Method:** `POST`
- **Path:** `/:drawId/jackpot-rollover`
- **Authentication:** Required (ADMIN only)
- **Description:** Add jackpot rollover amount to draw
- **Controller:** `addJackpotRolloverHandler`

### 6. Delete Draw
- **Method:** `DELETE`
- **Path:** `/:drawId`
- **Authentication:** Required (ADMIN only)
- **Description:** Delete a draw
- **Controller:** `deleteDrawHandler`

### Admin Sensitive Reads

### 7. Get Draws Needing Verification
- **Method:** `GET`
- **Path:** `/needs-verification`
- **Authentication:** Required (ADMIN only)
- **Description:** Get draws pending verification
- **Controller:** `getDrawsNeedingVerificationHandler`

### 8. Get Draw Statistics
- **Method:** `GET`
- **Path:** `/statistics/:drawId`
- **Authentication:** Required (ADMIN only)
- **Description:** Get detailed statistics for a draw
- **Controller:** `getDrawStatisticsHandler`

### Authenticated User Access

### 9. Get Active Draws
- **Method:** `GET`
- **Path:** `/active`
- **Authentication:** Required (any role)
- **Description:** Get currently active draws
- **Controller:** `getActiveDrawsHandler`

### 10. Get Prize Distribution
- **Method:** `GET`
- **Path:** `/prize-distribution/:drawId`
- **Authentication:** Required (ADMIN or SUBSCRIBER)
- **Description:** Get prize distribution details for a draw
- **Controller:** `getPrizeDistributionHandler`

### 11. Get Draw by ID
- **Method:** `GET`
- **Path:** `/:drawId`
- **Authentication:** Required (ADMIN or SUBSCRIBER)
- **Description:** Get specific draw details
- **Controller:** `getDrawByIdHandler`

### Public Access

### 12. Get All Draws
- **Method:** `GET`
- **Path:** `/`
- **Authentication:** None
- **Description:** Get all draws (public view)
- **Controller:** `getAllDrawsHandler`

---

## Golf Score Routes (`/api/golf-score`)

### 1. Add Golf Score
- **Method:** `POST`
- **Path:** `/add`
- **Authentication:** Required (SUBSCRIBER or ADMIN)
- **Description:** Record a new golf score
- **Controller:** `createGolfScore`

### 2. Get Last Five Scores
- **Method:** `GET`
- **Path:** `/last-five`
- **Authentication:** Required (any role)
- **Description:** Get user's last five golf scores
- **Controller:** `getLastFiveScores`

### 3. Get User Golf Scores
- **Method:** `GET`
- **Path:** `/`
- **Authentication:** Required (any role)
- **Description:** Get all golf scores for authenticated user
- **Controller:** `getUserGolfScores`

### 4. Get Golf Score Statistics
- **Method:** `GET`
- **Path:** `/stats`
- **Authentication:** Required (SUBSCRIBER or ADMIN)
- **Description:** Get user's golf score statistics
- **Controller:** `getUserScoreStats`

### 5. Get Golf Score by ID
- **Method:** `GET`
- **Path:** `/:id`
- **Authentication:** Required (SUBSCRIBER or ADMIN)
- **Description:** Get specific golf score details
- **Controller:** `getGolfScoreById`

### 6. Update Golf Score
- **Method:** `PUT`
- **Path:** `/:id`
- **Authentication:** Required (SUBSCRIBER or ADMIN)
- **Description:** Update an existing golf score
- **Controller:** `updateGolfScore`

### 7. Delete Golf Score
- **Method:** `DELETE`
- **Path:** `/:id`
- **Authentication:** Required (SUBSCRIBER or ADMIN)
- **Description:** Delete a golf score record
- **Controller:** `deleteGolfScore`

### 8. Get All Golf Scores (Admin)
- **Method:** `GET`
- **Path:** `/admin/all`
- **Authentication:** Required (ADMIN only)
- **Description:** Get all golf scores in the system
- **Controller:** `getAllGolfScores`

---

## Participant Routes (`/api/participant`)

### 1. Create Participant
- **Method:** `POST`
- **Path:** `/`
- **Authentication:** Required (SUBSCRIBER only)
- **Description:** Add participant to a draw
- **Controller:** `createParticipant`

### 2. Get Participant by ID
- **Method:** `GET`
- **Path:** `/:id`
- **Authentication:** None
- **Description:** Get participant details
- **Controller:** `getParticipantById`

### 3. Get Participants by Draw ID
- **Method:** `GET`
- **Path:** `/draw/:drawId`
- **Authentication:** Required (ADMIN only)
- **Description:** Get all participants in a specific draw
- **Controller:** `getParticipantsByDrawId`

### 4. Update Participant Score
- **Method:** `PUT`
- **Path:** `/:id`
- **Authentication:** Required
- **Description:** Update participant's score or details
- **Controller:** `updateParticipantScore`

### 5. Remove Participant from Draw
- **Method:** `POST`
- **Path:** `/remove`
- **Authentication:** Required
- **Description:** Remove participant from a draw
- **Controller:** `removeParticipantFromDraw`

---

## Subscription Model Routes (`/api/subscription-model`)

### 1. Add Subscription Model
- **Method:** `POST`
- **Path:** `/add`
- **Authentication:** Required (ADMIN only)
- **Description:** Create a new subscription model/plan
- **Controller:** `addSubscriptionModel`

### 2. Get All Subscription Models
- **Method:** `GET`
- **Path:** `/`
- **Authentication:** None
- **Description:** Get all available subscription models
- **Controller:** `getSubscriptionModels`

### 3. Update Subscription Model
- **Method:** `PUT`
- **Path:** `/update/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Update an existing subscription model
- **Controller:** `updateSubscriptionModel`

### 4. Delete Subscription Model
- **Method:** `DELETE`
- **Path:** `/delete/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Delete a subscription model
- **Controller:** `deleteSubscriptionModel`

---

## Subscription Order Routes (`/api/subscription-order`)

### 1. Create Subscription Order
- **Method:** `POST`
- **Path:** `/create-subscriptionOrder`
- **Authentication:** Required (any role)
- **Description:** Create a new subscription order for payment
- **Controller:** `createSubscriptionOrder`

### 2. Check Payment Status
- **Method:** `POST`
- **Path:** `/status`
- **Authentication:** Required (any role)
- **Description:** Check status of a subscription payment
- **Controller:** `checkPaymentStatus`

### 3. Confirm Payment
- **Method:** `POST`
- **Path:** `/confirm-payment`
- **Authentication:** Required (any role)
- **Description:** Confirm and finalize a payment
- **Controller:** `confirmPayment`

### 4. Get Orders
- **Method:** `GET`
- **Path:** `/orders`
- **Authentication:** None
- **Description:** Get subscription orders
- **Controller:** `getOrders`

---

## User Routes (`/api/user`)

### 1. Get All Users
- **Method:** `GET`
- **Path:** `/`
- **Authentication:** Required (ADMIN only)
- **Description:** Get list of all users
- **Controller:** `getUsers`

### 2. Get Recent Users
- **Method:** `GET`
- **Path:** `/recent`
- **Authentication:** Required (ADMIN only)
- **Description:** Get recently registered users
- **Controller:** `getRecentUsers`

### 3. Get User by ID
- **Method:** `GET`
- **Path:** `/:id`
- **Authentication:** Required (any role)
- **Description:** Get specific user details
- **Controller:** `getUserById`

### 4. Update User
- **Method:** `PUT`
- **Path:** `/update`
- **Authentication:** Required (any role)
- **Description:** Update user profile information
- **Controller:** `updateUser`

### 5. Delete User
- **Method:** `DELETE`
- **Path:** `/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Delete a user account
- **Controller:** `deleteUser`

### 6. Request Password Change
- **Method:** `POST`
- **Path:** `/request-password-change`
- **Authentication:** Required (any role)
- **Description:** Initiate password change request
- **Controller:** `requestPasswordChange`

### 7. Reset Password
- **Method:** `POST`
- **Path:** `/reset-password`
- **Authentication:** Required (any role)
- **Description:** Reset user password with token
- **Controller:** `resetPassword`

### 8. Assign Role
- **Method:** `PUT`
- **Path:** `/asign-role/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Assign or change user role
- **Controller:** `asignRole`

### 9. Update User Status
- **Method:** `PUT`
- **Path:** `/update-status/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Activate or deactivate user account
- **Controller:** `handleIsActive`

---

## User Charity Routes (`/api/user-charity`)

### 1. Get User Charity
- **Method:** `GET`
- **Path:** `/`
- **Authentication:** Required (any role)
- **Description:** Get charity information for user
- **Controller:** `getUserCharity`

### 2. Create User Charity
- **Method:** `POST`
- **Path:** `/create`
- **Authentication:** Required (SUBSCRIBER or ADMIN)
- **Description:** Create/associate charity with user
- **Controller:** `createUserCharity`

---

## Winner Routes (`/api/winner`)

### 1. Create Winner
- **Method:** `POST`
- **Path:** `/`
- **Authentication:** Required (SUBSCRIBER only)
- **Upload:** Single image upload
- **Description:** Record a new winner
- **Controller:** `createWinner`

### 2. Update Winner Verification Status
- **Method:** `PATCH`
- **Path:** `/verification-status/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Update winner verification status
- **Controller:** `updateWinnerVerificationStatus`

### 3. Update Winner Payment Status
- **Method:** `PATCH`
- **Path:** `/payment-status/:id`
- **Authentication:** Required (ADMIN only)
- **Description:** Update winner payment status
- **Controller:** `updateWinnerPaymentStatus`

---

## Authentication Roles

The API uses role-based access control with the following roles:

- **None/Public:** No authentication required
- **Any Role:** Authenticated users with any role (USER, SUBSCRIBER, ADMIN)
- **SUBSCRIBER:** Users with active subscription
- **ADMIN:** Administrator users only

---

## Error Handling

All routes use `asyncError` middleware for consistent error handling. Errors are caught and passed to the error handler middleware for proper response formatting.

---

## Middleware Used

- **authorizationMiddleware:** Validates authentication and user roles
- **asyncError:** Wraps controller functions to catch async errors
- **multerUpload/uploadMiddleware:** Handles file uploads for file-based endpoints

---

## Notes

- All timestamps use ISO 8601 format
- Pagination may be available on list endpoints (check individual controller implementation)
- File uploads support Cloudinary integration
- Email notifications are sent via configured email transporter
- Payment processing uses Stripe integration
