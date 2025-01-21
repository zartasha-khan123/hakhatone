// src\components\comments.tsx
'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import { toast } from 'sonner'
import { createComment, deleteComment, myFetch, updateComment } from '@/app/services/create'
import ReviewCard from './reviewscards'

export interface Comment { _id: string,  name: string; email: string; message: string, paramsId: number}

export default function PostCreator({ blog_id }: { blog_id: string }) {

  const [name, SetName] = useState("")
  const [email, SetEmail] = useState("")
  const [message, SetMessage] = useState("")

  const [cmtArray, setCmtArray] = useState<Comment[]>([])
  const [btnName, setBtnName] = useState("Post")
  const [findCard, setFindCard] = useState<Comment | null>(null)

// ------------------------------------------------create 
const postComment = async () => {
  const cardFound = cmtArray.find((comment) => comment._id === findCard?._id);

  if (cardFound) {
    const UpdatedComment = { name, email, message, paramsId: String(blog_id) };
    const res = await updateComment(cardFound._id, UpdatedComment)
    setCmtArray(res);
    SetName('');
    SetEmail('');
    SetMessage('');
    handleClose();
    setBtnName('Post')
    setFindCard(null)
    toast.success('Comment updated successfully', {
      className: 'text-lg',
      style: { fontSize: '18px' },
    });

  }
  
  else if (name && email && message && !cardFound) {
    const newComment = { name, email, message, paramsId: String(blog_id) };
    try {
      const res = await createComment(newComment);
      setCmtArray(res);
      SetName('');
      SetEmail('');
      SetMessage('');
      handleClose();
      toast.success('Comment posted successfully', {
        className: 'text-lg',
        style: { fontSize: '18px' },
      });
      
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  } else {
    toast.warning('Please fill all the fields', {
      className: 'text-lg',
      style: { fontSize: '18px' },
    });
  }
};


// ------------------------------------------------fetch
useEffect(() => {
  const fetchComments = async () => {
    try {
      const comments = await myFetch(blog_id);
      setCmtArray(comments);
      
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  fetchComments();
},[blog_id]);


// ------------------------------------------------set update input fields
const setUpdateInputFields = (data: Comment) => {
  setIsExpanded(true);
  SetName(data.name);
  SetEmail(data.email);
  SetMessage(data.message);
  setBtnName('Update')
  setFindCard(data)
}

// ------------------------------------------------Delete
const deleteFunction = async (_id: string) => {
  const res = await deleteComment(_id, blog_id);
  setCmtArray(res);
  toast.success('Comment deleted successfully', {
    className: 'text-lg',
    style: { fontSize: '18px' },
  });
}

  const [isExpanded, setIsExpanded] = useState(false)

  const handleClose = () => {
    setIsExpanded(false)
  }

  return (
    <div className="w-full p-6 bg-white border border-[#D4D7E5] rounded-lg">
      {!isExpanded ? (
        <div className="flex items-center gap-3">
          <Avatar className="h-[59px] w-[59px] border-2 border-primary">
            <AvatarImage src="/placeholder.svg" alt="User avatar" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex-1 h-14 px-4 text-left text-[#565973] font-semibold bg-[#F3F3F3] border border-[#B4B7C9] rounded-[30px] hover:bg-gray-100 transition-colors"
          >
            Add your comments here ...
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-[59px] w-[59px] border-2 border-primary">
                <AvatarImage src="/user.png" alt="User avatar" />
              </Avatar>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-11 w-11"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Added name input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                className="bg-[#F3F3F3] border-[#B4B7C9]"
                value={name}
                onChange={(e) => SetName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="bg-[#F3F3F3] border-[#B4B7C9]"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>
          </div>

          <Textarea
            placeholder="Write your post or question here"
            className="min-h-[250px] bg-[#F3F3F3] border-[#B4B7C9] resize-none"
            value={message}
            onChange={(e) => SetMessage(e.target.value)}
          />
          <div className="flex justify-end">
            <Button className="w-[161px]" onClick={postComment}>{btnName}</Button>
          </div>
        </div>
      )}

      <hr className='my-4'/>
      {cmtArray.map((comment: Comment, index: number) => (
         <ReviewCard
         data={comment}
         key={index}
         setUpdateInputFields={setUpdateInputFields}
         deleteFunction={deleteFunction}
       />
      ))}
    </div>

  )
}