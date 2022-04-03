import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import { preparePassword, ID_MATCHER } from '../utils/cryptoUtils';
import ErrorHandler from "../utils/errorHandler";

import db from '../db/models';

const { models: { User } } = db;

// Done for request on create new user    =>   /api/admin/activate-user/:id
const activateUser = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  await User.update(
    {
      isActive: true,
    },
    {
      where: { id: req.body.userId },
    },
  );

  res.status(200).json({
    success: true,
    message: 'Account activate successfully',
  });
});

// Done for request on create new user    =>   /api/admin/disable-user/:id
const disableUser = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  await User.update(
    {
      isActive: false,
    },
    {
      where: { id: req.body.userId },
    },
  );

  res.status(200).json({
    success: true,
    message: 'Account disable successfully',
  });
});

// Register user   =>   /api/admin/new-user
const registerUser = catchAsyncErrors(async (req, res, next) => {
  // TODO check Auth
  const { name, email, password, secondName, role, phoneNumber } = req.body;
  const correctPass = await preparePassword(password);

  const isExist = await User.findOne({ where: { 
    email ,}})

  if (isExist) {
    throw new Error("Пользователь с таким email уже зарегистрирован")
  }

  const user = await User.build({
    name,
    email,
    password: correctPass,
    secondName,
    role_id: ID_MATCHER[role],
    phoneNumber,
    isActive: false,
  });
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Account Registered successfully',
  });
});

// Delete user   => /api/admin/delete-user/:id
const deleteUser = catchAsyncErrors(async (req, res) => {
  // TODO check Auth
  await User.destroy({ where: { id: req.body.userId } });

  res.status(200).json({
    success: true,
  });
});

// Cuurent user profile   =>   /api/me
// const currentUserProfile = catchAsyncErrors(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// Update user profile   =>   /api/me/update
// const updateProfile = catchAsyncErrors(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     user.name = req.body.name;
//     user.email = req.body.email;

//     if (req.body.password) user.password = req.body.password;
//   }

//   // Update avatar
//   if (req.body.avatar !== "") {
//     const image_id = user.avatar.public_id;

//     // Delete user previous image/avatar
//     await cloudinary.v2.uploader.destroy(image_id);

//     const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
//       folder: "bookit/avatars",
//       width: "150",
//       crop: "scale",
//     });

//     user.avatar = {
//       public_id: result.public_id,
//       url: result.secure_url,
//     };
//   }

//   await user.save();

//   res.status(200).json({
//     success: true,
//   });
// });

// // Forgot password   =>   /api/password/forgot
// const forgotPassword = catchAsyncErrors(async (req, res, next) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) {
//     return next(new ErrorHandler("User not found with this email", 404));
//   }

//   // Get reset token
//   const resetToken = user.getResetPasswordToken();

//   await user.save({ validateBeforeSave: false });

//   // Get origin
//   const { origin } = absoluteUrl(req);

//   // Create reset password url
//   const resetUrl = `${origin}/password/reset/${resetToken}`;

//   const message = `Your password reset url is as follow: \n\n ${resetUrl} \n\n\ If you have not requested this email, then ignore it.`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: "BookIT Password Recovery",
//       message,
//     });

//     res.status(200).json({
//       success: true,
//       message: `Email sent to: ${user.email}`,
//     });
//   } catch (error) {
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save({ validateBeforeSave: false });

//     return next(new ErrorHandler(error.message, 500));
//   }
// });

// // Reset password   =>   /api/password/reset/:token
// const resetPassword = catchAsyncErrors(async (req, res, next) => {
//   // Hash URL token
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.query.token)
//     .digest("hex");

//   const user = await User.findOne({
//     resetPasswordToken,
//     resetPasswordExpire: { $gt: Date.now() },
//   });

//   if (!user) {
//     return next(
//       new ErrorHandler(
//         "Password reset token is invalid or has been expired",
//         400
//       )
//     );
//   }

//   if (req.body.password !== req.body.confirmPassword) {
//     return next(new ErrorHandler("Password does not match", 400));
//   }

//   // Setup the new password
//   user.password = req.body.password;

//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;

//   await user.save();

//   res.status(200).json({
//     success: true,
//     message: "Password updated successfully",
//   });
// });

// // Get all users   =>   /api/admin/users
// const allAdminUsers = catchAsyncErrors(async (req, res) => {
//   const users = await User.find();

//   res.status(200).json({
//     success: true,
//     users,
//   });
// });

// // Get user details  =>   /api/admin/users/:id
// const getUserDetails = catchAsyncErrors(async (req, res) => {
//   const user = await User.findById(req.query.id);

//   if (!user) {
//     return next(new ErrorHandler("User not found with this ID.", 400));
//   }

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

// // Update user details  =>   /api/admin/users/:id
// const updateUser = catchAsyncErrors(async (req, res) => {
//   const newUserData = {
//     name: req.body.name,
//     email: req.body.email,
//     role: req.body.role,
//   };

//   const user = await User.findByIdAndUpdate(req.query.id, newUserData, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

//   res.status(200).json({
//     success: true,
//   });
// });

// // Delete user    =>   /api/admin/users/:id
// const deleteUser = catchAsyncErrors(async (req, res) => {
//   const user = await User.findById(req.query.id);

//   if (!user) {
//     return next(new ErrorHandler("User not found with this ID.", 400));
//   }

//   // Remove avatar
//   const image_id = user.avatar.public_id;
//   await cloudinary.v2.uploader.destroy(image_id);

//   await user.remove();

//   res.status(200).json({
//     success: true,
//     user,
//   });
// });

export {
  registerUser,
  activateUser,
  disableUser,
  deleteUser,
//   currentUserProfile,
//   updateProfile,
//   forgotPassword,
//   resetPassword,
//   allAdminUsers,
//   getUserDetails,
//   updateUser,
//   deleteUser,
};
