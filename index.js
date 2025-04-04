const fs = require('fs');

const fileName = 'notlar.json';

if (!fs.existsSync(fileName)) {
  fs.writeFileSync(fileName, '[]', 'utf8');
}

const args = process.argv.slice(2);
const command = args[0]?.toLowerCase();

function readNotes() {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Dosya okunurken hata oluştu:', error);
    process.exit(1);
  }
}

function writeNotes(notes) {
  try {
    fs.writeFileSync(fileName, JSON.stringify(notes, null, 2), 'utf8');
  } catch (error) {
    console.error('Dosya yazılırken hata oluştu:', error);
    process.exit(1);
  }
}

if (command === 'ekle') {
  const noteText = args[1];
  if (!noteText) {
    console.log('Lütfen eklemek istediğiniz notu yazın.');
    process.exit(1);
  }

  const notes = readNotes();
  const newId =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) + 1 : 1;
  const newNote = { id: newId, text: noteText };
  notes.push(newNote);
  writeNotes(notes);

  console.log(`✅ Not eklendi: ${newNote.id} - ${newNote.text}`);
} else if (command === 'listele') {
  const notes = readNotes();
  if (notes.length === 0) {
    console.log('📂 Notlar boş.');
  } else {
    notes.forEach((note) => console.log(`${note.id} - ${note.text}`));
  }
} else if (command === 'sil') {
  if (args.length < 2) {
    console.log("Lütfen silmek istediğiniz notun ID'sini girin.");
    process.exit(1);
  }

  const id = parseInt(args[1]);
  if (isNaN(id)) {
    console.log('Lütfen geçerli bir ID girin.');
    process.exit(1);
  }

  let notes = readNotes();
  const initialLength = notes.length;
  notes = notes.filter((note) => note.id !== id);

  if (notes.length === initialLength) {
    console.log(`⛔ ID'si ${id} olan not bulunamadı.`);
  } else {
    writeNotes(notes);
    console.log(`🗑 Not silindi: ID ${id}`);
  }
} else {
  console.log('❌ Geçersiz komut! Kullanılabilir komutlar: ekle, listele, sil');
}
