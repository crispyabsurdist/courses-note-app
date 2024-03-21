import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a9a44eff-d83c-431d-95e7-ddef18adab56', '1Gardner40@hotmail.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('736ec55d-3ccc-4d62-b648-0c8f752fa095', '13Stella32@gmail.com', 'John Smith', 'https://i.imgur.com/YfJQV5z.png?id=15', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('bb5b8363-9122-45cd-b77c-b2df8e525903', '19Al.Bogan@gmail.com', 'Maria Lopez', 'https://i.imgur.com/YfJQV5z.png?id=21', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('97f23cfd-c04a-48da-a923-6e47912a6208', '25Jayden_Yost74@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'verified', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('21c39fc6-bc33-4478-a2ed-98ac7b9bc1b7', '31Esperanza54@yahoo.com', 'John Smith', 'https://i.imgur.com/YfJQV5z.png?id=33', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d51aed3f-f6b1-416e-956a-8c7b358795c2', '37Alanna63@yahoo.com', 'Liam Nguyen', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7a567f71-8663-43ac-bb33-e8a43d7c1743', '43Dave_Johns@gmail.com', 'Liam Nguyen', 'https://i.imgur.com/YfJQV5z.png?id=45', 'verified', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2e955977-7ad1-40e2-bf7f-efe29f9e395d', '49Bryana.Stoltenberg@hotmail.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ef61c3cf-0b58-4c3e-b29c-a02236fdfb6b', '55Verda_Collins@gmail.com', 'Maria Lopez', 'https://i.imgur.com/YfJQV5z.png?id=57', 'verified', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9d89c6e9-362a-4b88-aafe-ff5f4a87dd08', 'New Feature Alert', 'Dont forget to share your notes and help your peers', 'NoteShare Team', '64Vance47@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '21c39fc6-bc33-4478-a2ed-98ac7b9bc1b7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('66972e68-5c42-479e-9c20-efe8ec6a9910', 'Weekly Summary', 'Dont forget to share your notes and help your peers', 'Emma Watson', '71Theo36@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1109978d-3671-42a2-bf70-0ca377ab6922', 'New Lecture Notes Available', 'Check out the latest notes from this weeks lectures.', 'John Doe', '78Jose.Emard@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'd51aed3f-f6b1-416e-956a-8c7b358795c2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('16cff278-b5cd-4edc-ae4c-df075027d521', 'Reminder Share Your Notes', 'Weve introduced a new feature to improve your experience.', 'NoteShare Team', '85Raven.Muller71@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'd51aed3f-f6b1-416e-956a-8c7b358795c2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5e4c9121-f46f-47f6-a923-27f489b6e725', 'Reminder Share Your Notes', 'Weve introduced a new feature to improve your experience.', 'System Notification', '92Joanie11@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '21c39fc6-bc33-4478-a2ed-98ac7b9bc1b7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2bae548d-7cb2-42c8-9062-e52e509af8cc', 'Weekly Summary', 'Dont forget to share your notes and help your peers', 'NoteShare Team', '99Freeman_Moen@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '736ec55d-3ccc-4d62-b648-0c8f752fa095');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b68199af-9241-4d0e-8417-707406cd512b', 'New Lecture Notes Available', 'Dont forget to share your notes and help your peers', 'System Notification', '106Glen_Haley@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '97f23cfd-c04a-48da-a923-6e47912a6208');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5e3d5c28-5110-4c03-acd3-1e2ee8ca9f25', 'Reminder Share Your Notes', 'Check out the latest notes from this weeks lectures.', 'System Notification', '113Alicia.Lubowitz@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '2e955977-7ad1-40e2-bf7f-efe29f9e395d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3e6c7aeb-cf48-42ff-b041-a0d5519aab6e', 'Reminder Share Your Notes', 'Check out the latest notes from this weeks lectures.', 'System Notification', '120Sabrina.Skiles@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '21c39fc6-bc33-4478-a2ed-98ac7b9bc1b7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('12bbd391-c805-431d-bced-b804ded23a89', 'Reminder Share Your Notes', 'Check out the latest notes from this weeks lectures.', 'John Doe', '127Delia91@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '2e955977-7ad1-40e2-bf7f-efe29f9e395d');

INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('5f22d874-5ea5-4edb-8bd7-5c8da81ec8f1', 'Quantum Physics 101', 'An introduction to the principles of economics focusing on microeconomics and macroeconomics.', '2e955977-7ad1-40e2-bf7f-efe29f9e395d');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('cbd9196a-423b-444f-8219-1135c404b5fb', 'Principles of Economics', 'An introduction to the principles of economics focusing on microeconomics and macroeconomics.', '736ec55d-3ccc-4d62-b648-0c8f752fa095');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('9a98e99a-c398-4127-acd7-2b9188791e6f', 'Principles of Economics', 'This lecture covers the basics of algorithms including sorting and searching algorithms.', 'd51aed3f-f6b1-416e-956a-8c7b358795c2');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('dfb6cfb2-808a-47ac-8e79-f0abd5cd30d1', 'Modern Art History', 'This lecture dives into the advanced topics of calculus including integrals and differential equations.', '736ec55d-3ccc-4d62-b648-0c8f752fa095');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('132fb254-69eb-4ab5-a3f3-9f47cd38b298', 'Advanced Calculus', 'Exploring the major movements in modern art history from Impressionism to Abstract Expressionism.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('78c9a8f5-df79-4d0f-9baa-41b2e9016395', 'Principles of Economics', 'This lecture dives into the advanced topics of calculus including integrals and differential equations.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('77d16fb0-1be3-471d-ba89-a25aab37f4a7', 'Advanced Calculus', 'Exploring the major movements in modern art history from Impressionism to Abstract Expressionism.', '97f23cfd-c04a-48da-a923-6e47912a6208');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('5fbc9795-e563-484c-afb8-b4c9801b245c', 'Modern Art History', 'This lecture covers the basics of algorithms including sorting and searching algorithms.', 'bb5b8363-9122-45cd-b77c-b2df8e525903');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('d22b0da3-9221-46ef-a95a-4fea09c07ffb', 'Modern Art History', 'An overview of the fundamental concepts in quantum physics including waveparticle duality.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "lecturenote" ("id", "title", "content", "userId") VALUES ('5e8487f4-125b-48c1-ae04-a36f35d2bdbf', 'Modern Art History', 'An overview of the fundamental concepts in quantum physics including waveparticle duality.', '736ec55d-3ccc-4d62-b648-0c8f752fa095');

INSERT INTO "course" ("id", "name", "code") VALUES ('04058665-1d7c-4e7f-8a60-2c2aa5a939c2', 'Introduction to Psychology', 'CAL302');
INSERT INTO "course" ("id", "name", "code") VALUES ('ebb3dedd-7356-433a-a29f-10e1d3189baa', 'Principles of Economics', 'CAL302');
INSERT INTO "course" ("id", "name", "code") VALUES ('a8bb6aa6-9f98-4c54-8760-f39df1d7067d', 'Introduction to Psychology', 'ECO100');
INSERT INTO "course" ("id", "name", "code") VALUES ('48cd71d2-a12e-42c6-8aef-6da85094d346', 'Advanced Calculus', 'CHEM204');
INSERT INTO "course" ("id", "name", "code") VALUES ('4746b154-6b5e-4e56-92d1-d6a7108a50b3', 'Advanced Calculus', 'PSY101');
INSERT INTO "course" ("id", "name", "code") VALUES ('5fe8d664-4911-47bb-9878-710c45d86ef9', 'Introduction to Psychology', 'CAL302');
INSERT INTO "course" ("id", "name", "code") VALUES ('982162d4-98d6-49ee-bf3d-e05ff1e96af8', 'Modern World History', 'CHEM204');
INSERT INTO "course" ("id", "name", "code") VALUES ('f4a12283-b6d6-4df8-b98b-32b1fdbd44f6', 'Introduction to Psychology', 'PSY101');
INSERT INTO "course" ("id", "name", "code") VALUES ('a3b5ce92-9f49-46f9-9f52-24661ecec831', 'Introduction to Psychology', 'ECO100');
INSERT INTO "course" ("id", "name", "code") VALUES ('339d5d93-8d48-4ee8-bf74-6b0fe4214988', 'Principles of Economics', 'CAL302');

INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a3b5ce92-9f49-46f9-9f52-24661ecec831', '4e4f6b7b-cafa-469a-aa73-096202952547');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('21c39fc6-bc33-4478-a2ed-98ac7b9bc1b7', 'f4a12283-b6d6-4df8-b98b-32b1fdbd44f6', 'c71ee005-8d19-4a36-9ba2-775f66bbf7f3');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('736ec55d-3ccc-4d62-b648-0c8f752fa095', '48cd71d2-a12e-42c6-8aef-6da85094d346', '70e4a48a-393b-4528-b78f-7a2bdf77da30');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('7a567f71-8663-43ac-bb33-e8a43d7c1743', 'a3b5ce92-9f49-46f9-9f52-24661ecec831', '27da1f32-a732-49d2-b205-7a4b44875dba');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '339d5d93-8d48-4ee8-bf74-6b0fe4214988', 'a2f125cf-7052-40b8-a2d6-212bce404c57');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('97f23cfd-c04a-48da-a923-6e47912a6208', '339d5d93-8d48-4ee8-bf74-6b0fe4214988', '241fa5bc-b1f1-43a2-889b-de96286bc2cb');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('ef61c3cf-0b58-4c3e-b29c-a02236fdfb6b', 'a8bb6aa6-9f98-4c54-8760-f39df1d7067d', '802fcd2f-e4b6-48e0-8172-508c02781b5d');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('7a567f71-8663-43ac-bb33-e8a43d7c1743', 'ebb3dedd-7356-433a-a29f-10e1d3189baa', '3188a30e-c38b-4eb7-91d4-0f7838e8e1d6');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('736ec55d-3ccc-4d62-b648-0c8f752fa095', '982162d4-98d6-49ee-bf3d-e05ff1e96af8', '3c52ceb4-020d-4604-9c2e-ed440aa0c4ac');
INSERT INTO "usercourse" ("userId", "courseId", "id") VALUES ('d51aed3f-f6b1-416e-956a-8c7b358795c2', 'a3b5ce92-9f49-46f9-9f52-24661ecec831', 'df0be190-d251-4adb-a107-2e3c6ec981f8');

INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('77d16fb0-1be3-471d-ba89-a25aab37f4a7', '5fe8d664-4911-47bb-9878-710c45d86ef9', '92e2a6be-c84c-4cad-9e5f-ac06a30dba73');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('5e8487f4-125b-48c1-ae04-a36f35d2bdbf', '5fe8d664-4911-47bb-9878-710c45d86ef9', 'ba24b5c1-9eda-4e5e-8c70-05f1aae9aa7f');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('9a98e99a-c398-4127-acd7-2b9188791e6f', 'a3b5ce92-9f49-46f9-9f52-24661ecec831', '02e83846-253d-4174-890c-aa45ed4865ff');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('cbd9196a-423b-444f-8219-1135c404b5fb', '48cd71d2-a12e-42c6-8aef-6da85094d346', '72a4d7e7-f28d-4ab5-bcc5-876318bd0a79');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('132fb254-69eb-4ab5-a3f3-9f47cd38b298', 'a8bb6aa6-9f98-4c54-8760-f39df1d7067d', 'b5c1027f-9564-44ce-be37-77ccec698730');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('5e8487f4-125b-48c1-ae04-a36f35d2bdbf', '5fe8d664-4911-47bb-9878-710c45d86ef9', 'af8894a5-6d07-4d21-9ae5-c683ec700d11');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('9a98e99a-c398-4127-acd7-2b9188791e6f', 'ebb3dedd-7356-433a-a29f-10e1d3189baa', 'dc8eebbc-d496-4dc2-9b3a-acf18db885ee');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('132fb254-69eb-4ab5-a3f3-9f47cd38b298', 'f4a12283-b6d6-4df8-b98b-32b1fdbd44f6', '7dd0020c-1b5a-46b9-a3b9-947a3a6f2e00');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('78c9a8f5-df79-4d0f-9baa-41b2e9016395', '5fe8d664-4911-47bb-9878-710c45d86ef9', 'f07325b8-f19e-4ef3-992a-854bd7100d2b');
INSERT INTO "lecturenotecourse" ("lectureNoteId", "courseId", "id") VALUES ('dfb6cfb2-808a-47ac-8e79-f0abd5cd30d1', '48cd71d2-a12e-42c6-8aef-6da85094d346', '24f0368c-35de-4f1d-a41b-ac715c84289e');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
