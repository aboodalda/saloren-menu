/* ====================================================================
   إعدادات سالورين — عبيها مرة وحدة وخلص
   ==================================================================== */

// 1) Firebase — من console.firebase.google.com > Project settings > عام
//    (أنشئ مشروع جديد لسالورين أو استخدم مشروع موجود، وفعّل Realtime Database)
const firebaseConfig = {
  apiKey: "AIzaSyDn3ltSj6SoAq_P6UAv-DrfNYmOEyZwxZw",
  authDomain: "salooren-ebccc.firebaseapp.com",
  databaseURL: "https://salooren-ebccc-default-rtdb.firebaseio.com",
  projectId: "salooren-ebccc",
  storageBucket: "salooren-ebccc.firebasestorage.app",
  messagingSenderId: "624190566942",
  appId: "1:624190566942:web:2d828da8dadea7a35a340f",
  measurementId: "G-BJY0N74C6C"
};

// 2) Cloudinary — من console.cloudinary.com > Dashboard
//    لازم تعمل Upload Preset من Settings > Upload > Upload presets > Add preset
//    ونوعه Unsigned عشان الرفع يشتغل من المتصفح بدون سيرفر
const CLOUDINARY_CLOUD_NAME = "heqkzarp";
const CLOUDINARY_UPLOAD_PRESET = "saloreen";

// 3) رقم واتساب المطعم (بصيغة دولية، بدون + وبدون مسافات)
const RESTAURANT_WHATSAPP = "970592936150";
const RESTAURANT_NAME = "سالورين";

/* ==================================================================== */

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
