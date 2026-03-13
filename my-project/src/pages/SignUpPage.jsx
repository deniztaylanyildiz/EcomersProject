import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';

const SignUpPage = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { role_id: "3" }, // Müşteri rolü varsayılan
    mode: "all"
  });

  const selectedRoleId = watch("role_id");

  // Rolleri API'den çekme
  useEffect(() => {
    axiosInstance.get('/roles')
      .then(res => setRoles(res.data))
      .catch(err => {
        console.error("Role fetch error:", err);
        toast.error("Roles could not be fetched");
      });
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    
    // API'nin beklediği formata dönüştürme
    let payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    // Eğer Store rolü (id: 2) seçildiyse store objesini ekle
    if (data.role_id === "2") {
      payload.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.tax_no,
        bank_account: data.bank_account
      };
    }

    axiosInstance.post('/signup', payload)
      .then(() => {
        toast.success("You need to click link in email to activate your account!");
        history.goBack(); // Başarılıysa geldiği sayfaya geri dön
      })
      .catch(err => {
        toast.error(err.response?.data?.message || "An error occurred during sign up");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 flex items-center justify-center">
      {/* Form Kartı */}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-[#E8E8E8]">
        <h2 className="text-2xl font-bold text-[#252B42] mb-2 text-center">Create an Account</h2>
        <p className="text-[#737373] text-sm text-center mb-8">Join our community today</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Name</label>
            <input 
              {...register("name", { required: "Name is required", minLength: { value: 3, message: "Minimum 3 characters" }})}
              className={`w-full p-3 border rounded-md outline-none transition-all ${errors.name ? 'border-red-500' : 'border-[#DADADA] focus:border-[#23A6F0]'}`}
              placeholder="Your Full Name"
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Email</label>
            <input 
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email" }
              })}
              className={`w-full p-3 border rounded-md outline-none transition-all ${errors.email ? 'border-red-500' : 'border-[#DADADA] focus:border-[#23A6F0]'}`}
              placeholder="example@mail.com"
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Password</label>
            <input 
              type="password"
              {...register("password", { 
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Must include 8+ chars, upper/lower case, number and special char"
                }
              })}
              className={`w-full p-3 border rounded-md outline-none transition-all ${errors.password ? 'border-red-500' : 'border-[#DADADA] focus:border-[#23A6F0]'}`}
            />
            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Confirm Password</label>
            <input 
              type="password"
              {...register("confirmPassword", { 
                validate: value => value === watch("password") || "Passwords do not match"
              })}
              className={`w-full p-3 border rounded-md outline-none transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-[#DADADA] focus:border-[#23A6F0]'}`}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</span>}
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-1">Role</label>
            <select 
              {...register("role_id")} 
              className="w-full p-3 border border-[#DADADA] rounded-md bg-white focus:border-[#23A6F0] outline-none transition-all"
            >
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>

          {/* Store Specific Fields (Sadece Role ID "2" ise görünür) */}
          {selectedRoleId === "2" && (
            <div className="space-y-4 pt-4 border-t border-gray-100 animate-in fade-in duration-500">
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Name</label>
                <input {...register("storeName", { required: true, minLength: 3 })} className="w-full p-3 border border-[#DADADA] rounded-md" placeholder="Your Store Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Phone</label>
                <input 
                  {...register("storePhone", { 
                    required: true, 
                    pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Valid TR phone required" }
                  })} 
                  className="w-full p-3 border border-[#DADADA] rounded-md" placeholder="05XXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Tax ID</label>
                <input 
                  {...register("tax_no", { 
                    required: true, 
                    pattern: { value: /^T\d{4}V\d{6}$/, message: "Format: TXXXXVXXXXXX" }
                  })} 
                  className="w-full p-3 border border-[#DADADA] rounded-md" placeholder="T1234V123456"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-1">Store Bank Account (IBAN)</label>
                <input 
                  {...register("bank_account", { 
                    required: true, 
                    pattern: { value: /TR\d{24}/, message: "Valid IBAN required" }
                  })} 
                  className="w-full p-3 border border-[#DADADA] rounded-md" placeholder="TR..."
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold flex justify-center items-center gap-2 hover:bg-[#1a8cd8] transition-all disabled:bg-gray-400 mt-6 shadow-md active:scale-95"
          >
            {isLoading && <Loader2 className="animate-spin" size={20} />}
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;