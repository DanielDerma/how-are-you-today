import { NextApiHandler } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { generateQuestions } from "@/services/cohere";

const ProtectedRoute: NextApiHandler = async (req, res) => {
  const response = await generateQuestions();
  res.json({
    data: response,
  });
};

export default ProtectedRoute;
