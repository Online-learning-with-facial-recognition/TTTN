"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";
import { X } from "lucide-react"; // Icon đóng

interface AddClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddClassModal({ isOpen, onClose }: AddClassModalProps) {
  // State lưu dữ liệu nhập
  const [classTopic, setClassTopic] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [classPrice, setClassPrice] = useState(""); // ✅ Thêm state lưu giá tiền
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Hàm reset dữ liệu khi đóng modal
  const resetForm = () => {
    setClassTopic("");
    setSelectedFile(null);
    setSelectedCourse("");
    setSelectedSubject("");
    setClassPrice("");
    setSelectedDate("");
    setSelectedTime("");
  };

  // Reset form mỗi khi modal đóng
  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  // Xử lý chọn file
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative p-6 space-y-6">
        {/* Nút đóng modal (X) */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <DialogHeader className="flex justify-center">
          <DialogTitle className="text-lg font-semibold text-center">
            Add New Class
          </DialogTitle>
        </DialogHeader>

        {/* Nhập tên lớp */}
        <div>
          {/* <Label>Enter topic of Class...</Label> */}
          <Input 
            value={classTopic} 
            onChange={(e) => setClassTopic(e.target.value)} 
            placeholder="Enter class name..." 
            maxLength={50} 
          />
        </div>

        {/* Dropdown chọn khóa học, môn học, batch */}
        <Select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          <SelectItem value="">Select Course</SelectItem>
          <SelectItem value="course1">Course 1</SelectItem>
        </Select>
        <Select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
          <SelectItem value="">Select Subject</SelectItem>
          <SelectItem value="subject1">Subject 1</SelectItem>
        </Select>
        {/* Nhập giá tiền lớp học */}
        <div className="space-y-2">
          {/* <Label>Price (USD)</Label> */}
          <div className="relative flex items-center">
            <Input
              type="number"
              value={classPrice}
              onChange={(e) => setClassPrice(e.target.value)}
              placeholder="Enter price..."
              min="0"
              className="pr-6 text-left" // Để có khoảng trống trước ký hiệu $
            />
            <span className="absolute right-3 text-gray-500">$</span>
          </div>
        </div>

        {/* Chọn lịch học */}
        <div className="flex gap-2">
          <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          <Input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
        </div>

        {/* Nút upload tài liệu */}
        <input 
          type="file" 
          id="fileUpload" 
          className="hidden" 
          onChange={handleFileChange} 
        />
        <Button onClick={() => document.getElementById("fileUpload")?.click()} className="w-full bg-gray-300 text-gray-750">
          📂 Upload Class Material
        </Button>
        {selectedFile && <p className="text-sm text-gray-600 mt-1">Selected: {selectedFile.name}</p>}

        {/* Nút thêm lớp và nút đóng */}
        <div className="flex justify-end space-x-2 mt-3">
          <Button variant="secondary" onClick={onClose} className="border border-gray-300 text-gray-700">
            Cancel
          </Button>
          <Button className="bg-blue-500 text-white">Add</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
