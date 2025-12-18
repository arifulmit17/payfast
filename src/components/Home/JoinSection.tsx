import React, { useState } from "react";
import joinimg from "../../assets/banner/join.png";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export default function JoinSection() {
  return (
    <div className="grid grid-cols-2 gap-5">

      {/* Left Image */}
      <div className="w-full h-full">
        <img className="rounded-2xl" src={joinimg} alt="Join as agent" />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-semibold">Join as Agent</h1>

        {/* MODAL TRIGGER */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-30 h-10 rounded-2xl bg-cyan-900 hover:bg-cyan-300">
              Register Now
            </Button>
          </DialogTrigger>

          {/* MODAL CONTENT */}
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Register as Agent</DialogTitle>
            </DialogHeader>

            {/* SIMPLE REGISTER FORM */}
            <form className="space-y-4 mt-4">
              <div className="flex flex-col gap-2">
                <label className="font-medium">Full Name</label>
                <input
                  type="text"
                  className="border p-2 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  className="border p-2 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  className="border p-2 rounded-md"
                  placeholder="Create a password"
                  required
                />
              </div>

              <Button className="w-full bg-cyan-900 hover:bg-cyan-300">
                Submit Registration
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
