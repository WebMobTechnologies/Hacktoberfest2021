const Errors = {
    phonenumberLength: 'Min 6 - Max 15 digits required in phone',

    phoneBlank: 'Phone number is required',
    phoneInvalid: 'Phone number is invalid',
    phoneTooLong: 'Phone number exceeded limit',
    phoneTooShort: 'Phone number is too short',

    firstNameBlank: 'Please enter First Name',
    firstNameLength: 'First Name characters exceed limit',
    firstNameInvalid: 'First Name is invalid',
    lastNameBlank: 'Please enter Last Name',
    lastNameLength: 'Last Name characters exceed limit',
    lastNameInvalid: 'Last Name is invalid',

    emailBlank: 'Please enter Email',
    emailValidity: 'Email is not valid',

    accountNameBlank: 'Account name is required',
    accountNameTooLong: 'Account name exceeded limit',

    bsbNoBlank: 'BSB No. is required',
    bsbNoTooLong: 'BSB No. exceeded limit',

    accountNoBlank: 'Account No. is required',
    accountNoTooLong: 'Account No. exceeded limit',

    discountCodeBlank: 'Please enter discount code',
    discountCodeLength: 'Discount code characters exceed limit',

    voucherCodeBlank: 'Please enter voucher code',
    voucherCodeLength: 'Voucher code characters exceed limit',

    voucherMessageBlank: 'Please enter message',
    voucherMessageLength: 'Message characters exceed limit',

    titleError: 'Please enter title',
    descError: 'Please enter description',

    emailAlreadyRegistered: 'This email is already registered',
    pwdBlank: 'Please enter Password',
    pwdInvalid: 'Please enter strong password. Ex: Abc@123',
    pwdLengthMinimum: 'Password must be at least 8 characters',
    pwdMisMatch: 'Password does not match',
    pwdConfirmation: 'Please confirm password',
    occupationBlank: 'Please enter Occupation',
    occupationLength: 'Occupation characters exceed limit',
    occupationInvalid: 'Occupation is invalid',
    bioLength: 'Maximum 500 characters are allowed',
    dateValidity: 'Date is Invalid',

    vehicleMakeError: 'Please enter maker name',
    vehicleModelError: 'Please enter model name ',
    vehicleYearError: 'Please enter year',
    vehicleRegNumberError: 'Please enter registration number',

    facebookLoginError: 'Could not login with Facebook',
    userNotRegisteredWithFB: 'User not registered with Facebook',
    userNotRegisteredWithApple: 'User not registered with Apple',
    networkError: 'Network error',
    somethingWentWrong: 'Something went wrong',
    serverError: 'Something went wrong.Please try again.',
    internetError: 'Internet not available.',
    invalidToken: 'User is unauthorized. Please login again.',
    requestTimeOut: 'Something went wrong.Please try again.',
    optionError: 'Please select any option from list',
    postImageBlankErr: 'Please add an image',
    postInvalidErr: 'Image and text both cannot be empty.',
    postTopicBlank: 'Please select a topic for this post',
    postAddedSuccessfully: 'Post added successfully',
    pleaseImgOnly: 'Please choose images only',
    crntPwdNotMatch: 'Current password does not match',
    otpBlankErr: 'Please enter OTP',
    plzCheckErrors: 'Oops! Please check for errors',
    emailFetchError: 'Could not fetch email address. Please try again',
    otpInvalid: 'Invalid OTP',
    couldNotFetchTopics: 'Could not fetch topics',
    couldNotAddedPhotos: 'Photos could not be added',
    couldNotDeletePhotos: 'Photo could not be delete',
    couldNotUpdateProfilePic: 'Profile picture could not be updated',
    couldNotAddPost: 'Could not add post',
    couldNotUpdateProfile: 'Profile could not be updated',
    couldNotDeletePost: 'Could not delete post',
    couldNotSharePost: 'Could not share post',
    couldNotFollowUser: 'Could not follow this user',
    couldNotShareQue: 'Could not share question',
    couldNotAddComment: 'Could not add comment',
    pwdUpdateError: 'Could not update password. Please request again',
    notAuthenticatedUser: 'Could not authenticate user',
    alreadyRegistered:
        'this user has already been registered. Please login from Login screen.',
    facebookUserNotFound:
        'Facebook user not found in our record. Please sign up',
    appleUserNotFound: 'Apple user not found in our record. Please sign up',
    accountRegisteredSuccess:
        'Your account is registered. Please login to continue',
    dueDateBlank: 'Please add due date',
    commentBlank: 'Please add text',
    questionTitleBlank: 'Please add title',
    questionTitleEmojiErr: 'Cannot add emojis in the title',
    postBlankErr: 'Please add either photos or text',
    profilePicBlank: 'Please add a profile picture',
    userNotFoundErr: 'Sorry, we can’t find this email address',
    questionTagsBlank: 'Please add tags',

    mailAppConfigError: 'Mail app is not configured on this device',
    msgShareError: 'Could not share message',

    dateSelect: 'Please select date',
};

const PermissionMessage = {
    cancel: 'Cancel',
    ok: 'ok',
    openSetting: 'Open Setting',
    authorized: 'authorized',
    denied: 'denied',
    restricted: 'restricted',
    granted: 'granted',
    never_ask_again: 'never_ask_again',

    //Camera
    cameraPermissionTitle: 'Camera',
    cameraPermissionMessage:
        "We need access so you can take pic, please open this app's setting and allow camera access",

    //Photo
    photoPermissionTitle: 'Photo',
    photoPermissionMessage:
        "We need access so you can upload pic, please open this app's setting and allow photo access",

    //Location
    locationPermissionTitle: 'Location',
    locationPermissionMessage:
        "We need access so we can get your current location, please open this app's setting and allow location access.",

    //Notification
    notificationPermissionTitle: 'Notification',
    notificationPermissionMessage:
        "We need access so you can get notification, please open this app's setting and allow notification access.",

    //Storage
    storagePermissionTitle: 'Storage',
    storagePermissionMessage:
        "We need access so we can get your storage, please open this app's setting and allow storage access.",

    //Contacts
    contactPermissionTitle: 'Contact',
    contactPermissionMessage:
        "We need access so we can get your contacts, please open this app's setting and allow contacts access.",

    //Phone Call
    phoneCallPermissionTitle: 'PhoneCall',
    phoneCallPermissionMessage:
        "We need access so we can allow you to call, please open this app's setting and allow phone call access.",

    //Read Sms
    readSmsPermissionTitle: 'ReadSms',
    readSmsPermissionMessage:
        "We need access so we can get your sms, please open this app's setting and allow message access.",
};

export default {Errors, PermissionMessage};
