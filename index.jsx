import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const NotepadApp = () => {
  const [notes, setNotes] = useState("");

  const handleClear = () => setNotes("");
  const handleSave = () => {
    const blob = new Blob([notes], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'notes.txt';
    link.click();
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Not Defteri</h1>
      <Card className="shadow-lg">
        <CardContent>
          <Textarea
            className="w-full h-64 p-2 border rounded-md"
            placeholder="Notlarınızı buraya yazın..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <Button onClick={handleClear} className="bg-red-500 hover:bg-red-600">Temizle</Button>
            <Button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600">Kaydet</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotepadApp;