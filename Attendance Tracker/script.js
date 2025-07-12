const arrA = [
    { "name": "Jiya Kyada", "enrollment_no": "24010101151", "roll_no": 101, "id": "3A-1" },
    { "name": "Shah Dhvani Hitesh", "enrollment_no": "24010101257", "roll_no": 102, "id": "3A-1" },
    { "name": "Saraya Mohit Haresh", "enrollment_no": "24010101251", "roll_no": 103, "id": "3A-1" },
    { "name": "Zalavadiya Heet Siddharth", "enrollment_no": "24010101311", "roll_no": 104, "id": "3A-1" },
    { "name": "Darshil Dobariya", "enrollment_no": "24010101065", "roll_no": 105, "id": "3A-1" },
    { "name": "Nafisa Gandhi", "enrollment_no": "24010101076", "roll_no": 106, "id": "3A-1" },
    { "name": "Vasani Yashvi Niteshbhai", "enrollment_no": "24010101299", "roll_no": 107, "id": "3A-1" },
    { "name": "Delvadiya Manavkumar Kirtibhai", "enrollment_no": "24010101056", "roll_no": 108, "id": "3A-1" },
    { "name": "Ashara Palak Gopalbhai", "enrollment_no": "24010101008", "roll_no": 109, "id": "3A-1" },
    { "name": "Lunagariya Greshi Kamleshbhai", "enrollment_no": "24010101158", "roll_no": 110, "id": "3A-1" },
    { "name": "Nanavati Shrushti Gargesh", "enrollment_no": "24010101187", "roll_no": 111, "id": "3A-1" },
    { "name": "Ranpara Jay Manishbhai", "enrollment_no": "24010101238", "roll_no": 112, "id": "3A-1" },
    { "name": "Disha Mehta", "enrollment_no": "24010101173", "roll_no": 113, "id": "3A-1" },
    { "name": "Thummar Niraj Bhaveshbhai", "enrollment_no": "24010101282", "roll_no": 114, "id": "3A-1" },
    { "name": "Kachhava Nakul Umeshbhai", "enrollment_no": "24010101116", "roll_no": 115, "id": "3A-1" },
    { "name": "Kanabar Urva Darshanbhai", "enrollment_no": "24010101124", "roll_no": 116, "id": "3A-1" },
    { "name": "Nakar Dhruvil Hitesh", "enrollment_no": "24010101186", "roll_no": 117, "id": "3A-1" },
    { "name": "Poshiya Priyanshi Ajaybhai", "enrollment_no": "24010101223", "roll_no": 118, "id": "3A-1" },
    { "name": "Baravalia Dharitri Manharbhai", "enrollment_no": "24010101013", "roll_no": 119, "id": "3A-1" },
    { "name": "Muchhara Kashish Hiteshbhai", "enrollment_no": "24010101184", "roll_no": 120, "id": "3A-1" },
    { "name": "Chauhan Aditya Sureshbhai", "enrollment_no": "24010101038", "roll_no": 121, "id": "3A-2" },
    { "name": "Harsora Sakshi Ajaybhai", "enrollment_no": "24010101097", "roll_no": 122, "id": "3A-2" },
    { "name": "Katrodiya Sahil Rajeshbhai", "enrollment_no": "24010101139", "roll_no": 123, "id": "3A-2" },
    { "name": "Trambadiya Parikshit Parimalbhai", "enrollment_no": "24010101284", "roll_no": 124, "id": "3A-2" },
    { "name": "Padariya Preya Parasbhai", "enrollment_no": "24010101192", "roll_no": 125, "id": "3A-2" },
    { "name": "Gambhava Krushiben Manojbhai", "enrollment_no": "24010101074", "roll_no": 126, "id": "3A-2" },
    { "name": "Jadeja Vishwrajsinh Krushnasinh", "enrollment_no": "24010101107", "roll_no": 127, "id": "3A-2" },
    { "name": "Patel Jiya Sandipbhai", "enrollment_no": "24010101214", "roll_no": 128, "id": "3A-2" },
    { "name": "Pipalava Smit Ashvinbhai", "enrollment_no": "24010101219", "roll_no": 129, "id": "3A-2" },
    { "name": "Gohil Harshrajsinh Jitendrasinh", "enrollment_no": "24010101091", "roll_no": 130, "id": "3A-2" },
    { "name": "Kathiriya Arshi Keshubhai", "enrollment_no": "24010101138", "roll_no": 131, "id": "3A-2" },
    { "name": "Undhad Vishwa Rajesh", "enrollment_no": "24010101288", "roll_no": 132, "id": "3A-2" },
    { "name": "Diya Raiyani", "enrollment_no": "24010101229", "roll_no": 133, "id": "3A-2" },
    { "name": "Chavda Maulik Vinodbhai", "enrollment_no": "24010101043", "roll_no": 134, "id": "3A-2" },
    { "name": "Chavda Priyanka Prabodhbhai", "enrollment_no": "24010101044", "roll_no": 135, "id": "3A-2" },
    { "name": "Chavda Virendrasinh Ashwinbhai", "enrollment_no": "24010101045", "roll_no": 136, "id": "3A-2" },
    { "name": "Galani Krunal Chetanbhai", "enrollment_no": "24010101072", "roll_no": 137, "id": "3A-2" },
    { "name": "Kavar Suchi Vasantbhai", "enrollment_no": "24010101140", "roll_no": 138, "id": "3A-2" },
    { "name": "Odedara Nilesh Parbat", "enrollment_no": "24010101190", "roll_no": 139, "id": "3A-2" },
    { "name": "Vasani Dishita Nikhilkumar", "enrollment_no": "24010101298", "roll_no": 140, "id": "3A-2" },
    { "name": "Vachhani Vaishvi Manojkumar", "enrollment_no": "24010101290", "roll_no": 141, "id": "3A-3" },
    { "name": "Bhadania Ronit Yatinbhai", "enrollment_no": "24010101017", "roll_no": 142, "id": "3A-3" },
    { "name": "Chauhan Jenil Virenbhai", "enrollment_no": "24010101039", "roll_no": 143, "id": "3A-3" },
    { "name": "Virpara Krisha Rajeshbhai", "enrollment_no": "24010101302", "roll_no": 144, "id": "3A-3" },
    { "name": "Chandra Darshit Hiteshbhai", "enrollment_no": "24010101035", "roll_no": 145, "id": "3A-3" },
    { "name": "Detroja Ruchit Arvindbhai", "enrollment_no": "24010101057", "roll_no": 146, "id": "3A-3" },
    { "name": "Kapuriya Hepin Pravinbhai", "enrollment_no": "24010101131", "roll_no": 147, "id": "3A-3" },
    { "name": "Gohel Smit Ashvinbhai", "enrollment_no": "24010101090", "roll_no": 148, "id": "3A-3" },
    { "name": "Patel Kirtan Amitbhai", "enrollment_no": "24010101215", "roll_no": 149, "id": "3A-3" },
    { "name": "Ginoya Deep Kantilal", "enrollment_no": "24010101085", "roll_no": 150, "id": "3A-3" },
    { "name": "Marvaniya Jainish Dharmendrabhai", "enrollment_no": "24010101169", "roll_no": 151, "id": "3A-3" },
    { "name": "Ajudiya Yash Nareshbhai", "enrollment_no": "24010101004", "roll_no": 152, "id": "3A-3" },
    { "name": "Manas Borisagar", "enrollment_no": "24010101031", "roll_no": 153, "id": "3A-3" },
    { "name": "Joshi Soham Kamleshbhai", "enrollment_no": "24010101113", "roll_no": 154, "id": "3A-3" },
    { "name": "Kakadiya Khilan Manishbhai", "enrollment_no": "24010101117", "roll_no": 155, "id": "3A-3" },
    { "name": "Sidhdhapura Dhaval Dharmeshbhai", "enrollment_no": "24010101265", "roll_no": 156, "id": "3A-3" },
    { "name": "Sitapara Aryan Sunilbhai", "enrollment_no": "24010101267", "roll_no": 157, "id": "3A-3" },
    { "name": "Bhatasana Nainshi Pareshbhai", "enrollment_no": "24010101021", "roll_no": 158, "id": "3A-3" },
    { "name": "Malvaniya Viraj Jatinbhai", "enrollment_no": "24010101163", "roll_no": 159, "id": "3A-3" },
    { "name": "Tanisha Pambhar", "enrollment_no": "24010101197", "roll_no": 160, "id": "3A-3" },
    { "name": "Padshala Kuldeep Rajendrakumar", "enrollment_no": "24010101196", "roll_no": 161, "id": "3A-4" },
    { "name": "Bhimani Vishva Manishbhai", "enrollment_no": "24010101026", "roll_no": 162, "id": "3A-4" },
    { "name": "Karan Anushka Pintubhai", "enrollment_no": "24010101132", "roll_no": 163, "id": "3A-4" },
    { "name": "Vyas Kavya Sachin", "enrollment_no": "24010101307", "roll_no": 164, "id": "3A-4" },
    { "name": "Kamani Purna Hareshbhai", "enrollment_no": "24010101123", "roll_no": 165, "id": "3A-4" },
    { "name": "Mori Nandita Renishkumar", "enrollment_no": "24010101183", "roll_no": 166, "id": "3A-4" },
    { "name": "Ratanghayra Pankti Himanshu", "enrollment_no": "24010101239", "roll_no": 167, "id": "3A-4" },
    { "name": "Rupala Nikhil Kashmeeraben", "enrollment_no": "24010101242", "roll_no": 168, "id": "3A-4" },
    { "name": "Jadeja Shivrajsinh Girirajsinh", "enrollment_no": "24010101106", "roll_no": 169, "id": "3A-4" },
    { "name": "Hirva Satani", "enrollment_no": "24010101252", "roll_no": 170, "id": "3A-4" },
    { "name": "Raiyani Jenil Sanjaybhai", "enrollment_no": "24010101230", "roll_no": 171, "id": "3A-4" },
    { "name": "Chandpa Prince Sureshbhai", "enrollment_no": "24010101034", "roll_no": 172, "id": "3A-4" },
    { "name": "Faldu Vrajesh Sanjaybhai", "enrollment_no": "24010101069", "roll_no": 173, "id": "3A-4" },
    { "name": "Khambholiya Manya Parasharbhai", "enrollment_no": "24010101142", "roll_no": 174, "id": "3A-4" },
    { "name": "Prajapati Kaivalya Samir", "enrollment_no": "24010101224", "roll_no": 175, "id": "3A-4" },
    { "name": "Moral Aadit Shaileshbhai", "enrollment_no": "24010101182", "roll_no": 176, "id": "3A-4" },
    { "name": "Shihora Vibhu Chetanbhai", "enrollment_no": "24010101260", "roll_no": 177, "id": "3A-4" },
    { "name": "Kanani Kruti Jayeshbhai", "enrollment_no": "24010101126", "roll_no": 178, "id": "3A-4" },
    { "name": "Karoliya Princekumar Sandipbhai", "enrollment_no": "24010101135", "roll_no": 179, "id": "3A-4" },
    { "name": "Khunt Rutvi Hiteshbhai", "enrollment_no": "24010101146", "roll_no": 180, "id": "3A-4" },
    { "name": "Charadva Abhishek Virenbhai", "enrollment_no": "24010101036", "roll_no": 181, "id": "3A-5" },
    { "name": "Dave Krisha Kalpeshbhai", "enrollment_no": "24010101053", "roll_no": 182, "id": "3A-5" },
    { "name": "Janvi Kalaria", "enrollment_no": "24010101119", "roll_no": 183, "id": "3A-5" },
    { "name": "Rajwani Rohan Malik", "enrollment_no": "24010101232", "roll_no": 184, "id": "3A-5" },
    { "name": "Rana Parthrajsinh Bhupatsinh", "enrollment_no": "24010101235", "roll_no": 185, "id": "3A-5" },
    { "name": "Solanki Ronak Arvindbhai", "enrollment_no": "24010101271", "roll_no": 186, "id": "3A-5" },
    { "name": "Panchal Vedantkumar Niravbhai", "enrollment_no": "24010101198", "roll_no": 187, "id": "3A-5" },
    { "name": "Ambasana Venisha Hitenbhai", "enrollment_no": "24010101006", "roll_no": 188, "id": "3A-5" },
    { "name": "Raichura Smeet Rohitkumar", "enrollment_no": "24010101228", "roll_no": 189, "id": "3A-5" },
    { "name": "Gambhava Mirali Sureshbhai", "enrollment_no": "24010101075", "roll_no": 190, "id": "3A-5" },
    { "name": "Dave Dhruv Viralkumar", "enrollment_no": "24010101050", "roll_no": 191, "id": "3A-5" },
    { "name": "Ghetiya Ritu Pankajbhai", "enrollment_no": "24010101080", "roll_no": 192, "id": "3A-5" },
    { "name": "Radhanpara Saumya Jatinbhai", "enrollment_no": "24010101226", "roll_no": 193, "id": "3A-5" },
    { "name": "Yadav Gaurav Kaushikbhai", "enrollment_no": "24010101308", "roll_no": 194, "id": "3A-5" },
    { "name": "Buddhadev Misri Sanjaybhai", "enrollment_no": "24010101033", "roll_no": 195, "id": "3A-5" },
    { "name": "Joshi Kairav Paren", "enrollment_no": "24010101112", "roll_no": 196, "id": "3A-5" },
    { "name": "Savaliya Dhruvi Bharatbhai", "enrollment_no": "24010101253", "roll_no": 197, "id": "3A-5" },
    { "name": "Radhanpura Jeel Nimish", "enrollment_no": "24010101227", "roll_no": 198, "id": "3A-5" },
    { "name": "Savaliya Priyanshi Sureshbhai", "enrollment_no": "24010101255", "roll_no": 199, "id": "3A-5" },
    { "name": "Zala Bhavyadeepsinh Pruthvirajsinh", "enrollment_no": "24010101310", "roll_no": 200, "id": "3A-5" },
    { "name": "Sinha Milankumar Sujitkumar", "enrollment_no": "24010101266", "roll_no": 201, "id": "3A-6" },
    { "name": "Lakhtaria Kevin Homin", "enrollment_no": "24010101153", "roll_no": 202, "id": "3A-6" },
    { "name": "Moliya Kartavya Bhaveshbhai", "enrollment_no": "24010101180", "roll_no": 203, "id": "3A-6" },
    { "name": "Monpara Nij Hareshbhai", "enrollment_no": "24010101181", "roll_no": 204, "id": "3A-6" },
    { "name": "Divya Thakar", "enrollment_no": "24010101280", "roll_no": 205, "id": "3A-6" },
    { "name": "Mendapara Piyu Amishbhai", "enrollment_no": "24010101177", "roll_no": 206, "id": "3A-6" },
    { "name": "Pandya Karan Tusharbhai", "enrollment_no": "24010101199", "roll_no": 207, "id": "3A-6" },
    { "name": "Raval Meet Mohitkumar", "enrollment_no": "24010101241", "roll_no": 208, "id": "3A-6" },
    { "name": "Virpariya Heer Manishbhai", "enrollment_no": "24010101303", "roll_no": 209, "id": "3A-6" },
    { "name": "Bhanushali Hiral Bhaven", "enrollment_no": "24010101020", "roll_no": 210, "id": "3A-6" },
    { "name": "Kamaliya Akashkumar Rameshbhai", "enrollment_no": "24010101121", "roll_no": 211, "id": "3A-6" },
    { "name": "Popat Honey Nileshbhai", "enrollment_no": "24010101222", "roll_no": 212, "id": "3A-6" },
    { "name": "Badrakiya Meet Bharatbhai", "enrollment_no": "24010101009", "roll_no": 213, "id": "3A-6" },
    { "name": "Kanani Kavit Nareshbhai", "enrollment_no": "24010101125", "roll_no": 214, "id": "3A-6" },
    { "name": "Ambaliya Manan Jayeshbhai", "enrollment_no": "24010101005", "roll_no": 215, "id": "3A-6" },
    { "name": "Hinsu Umang Bharatbhai", "enrollment_no": "24010101099", "roll_no": 216, "id": "3A-6" },
    { "name": "Kakaniya Bhavy Niteshbhai", "enrollment_no": "24010101118", "roll_no": 217, "id": "3A-6" },
    { "name": "Padia Kartik Balkrishna", "enrollment_no": "24010101195", "roll_no": 218, "id": "3A-6" },
    { "name": "Mankada Hasan Shabbirhusain", "enrollment_no": "24010101166", "roll_no": 219, "id": "3A-6" },
    { "name": "Mehta Dhairy Kalpeshbhai", "enrollment_no": "24010101172", "roll_no": 220, "id": "3A-6" },
    { "name": "Mehta Het Lalitkumar", "enrollment_no": "24010101174", "roll_no": 221, "id": "3A-7" },
    { "name": "Kahan Sanghani", "enrollment_no": "24010101246", "roll_no": 222, "id": "3A-7" },
    { "name": "Gotani Himesh Sanjaybhai", "enrollment_no": "24010101095", "roll_no": 223, "id": "3A-7" },
    { "name": "Narola Yash Nileshbhai", "enrollment_no": "24010101189", "roll_no": 224, "id": "3A-7" },
    { "name": "Targata Dharmishtha Arjanbhai", "enrollment_no": "24010101279", "roll_no": 225, "id": "3A-7" },
    { "name": "Bhuva Tirth Shaileshbhai", "enrollment_no": "24010101030", "roll_no": 226, "id": "3A-7" },
    { "name": "Jadeja Yashraj Lakhdhirsinh", "enrollment_no": "24010101108", "roll_no": 227, "id": "3A-7" },
    { "name": "Krisha Pujara", "enrollment_no": "24010101225", "roll_no": 228, "id": "3A-7" },
    { "name": "Varsani Ritul Hirji", "enrollment_no": "24010101296", "roll_no": 229, "id": "3A-7" },
    { "name": "Parmar Dhyey Dharmendra", "enrollment_no": "24010101208", "roll_no": 230, "id": "3A-7" },
    { "name": "Shingala Mansi Rajeshbhai", "enrollment_no": "24010101263", "roll_no": 231, "id": "3A-7" },
    { "name": "Dobariya Jeel Upendrabhai", "enrollment_no": "24010101066", "roll_no": 232, "id": "3A-7" },
    { "name": "Khant Mannkumar Jigneshbhai", "enrollment_no": "24010101143", "roll_no": 233, "id": "3A-7" },
    { "name": "Yadav Neel Hiteshbhai", "enrollment_no": "24010101309", "roll_no": 234, "id": "3A-7" },
    { "name": "Andodariya Yash Maheshbhai", "enrollment_no": "24010101007", "roll_no": 235, "id": "3A-7" },
    { "name": "Hirani Jeelkumar Sanjaybhai", "enrollment_no": "24010101101", "roll_no": 236, "id": "3A-7" },
    { "name": "Mankad Shyamsundar Mitbhai", "enrollment_no": "24010101165", "roll_no": 237, "id": "3A-7" },
    { "name": "Agavan Rohan Farukbhai", "enrollment_no": "24010101001", "roll_no": 238, "id": "3A-7" },
    { "name": "Bhadja Zeel Satishkumar", "enrollment_no": "24010101018", "roll_no": 239, "id": "3A-7" },
    { "name": "Shreya Vijaybhai Bhundia", "enrollment_no": "24010101028", "roll_no": 240, "id": "3A-7" },
    { "name": "Aghara Keyur Hiteshbhai", "enrollment_no": "24010101002", "roll_no": 241, "id": "3A-8" },
    { "name": "Buddhadev Deep Nitinbhai", "enrollment_no": "24010101032", "roll_no": 242, "id": "3A-8" },
    { "name": "Godham Meet Maheshbhai", "enrollment_no": "24010101086", "roll_no": 243, "id": "3A-8" },
    { "name": "Katariya Trisha Ashvinbhai", "enrollment_no": "24010101137", "roll_no": 244, "id": "3A-8" },
    { "name": "Vekariya Jay Bipinbhai", "enrollment_no": "24010101301", "roll_no": 245, "id": "3A-8" },
    { "name": "Rutvi Gautami", "enrollment_no": "24010101077", "roll_no": 246, "id": "3A-8" },
    { "name": "Sankaliya Aryan Ashokbhai", "enrollment_no": "24010101247", "roll_no": 247, "id": "3A-8" },
    { "name": "Ghadiya Yashvi Sanjaybhai", "enrollment_no": "24010101078", "roll_no": 248, "id": "3A-8" },
    { "name": "Ved Chatvani", "enrollment_no": "24010101037", "roll_no": 249, "id": "3A-8" },
    { "name": "Ghorai Swati Sanjib", "enrollment_no": "24010101084", "roll_no": 250, "id": "3A-8" },
    { "name": "Karena Radhika Bharatbhai", "enrollment_no": "24010101134", "roll_no": 251, "id": "3A-8" },
    { "name": "Pandya Kruti Tusharbhai", "enrollment_no": "24010101200", "roll_no": 252, "id": "3A-8" },
    { "name": "Patel Tejkumar Niteshbhai", "enrollment_no": "24010101218", "roll_no": 253, "id": "3A-8" },
    { "name": "Sagpariya Mahee Nitinbhai", "enrollment_no": "24010101244", "roll_no": 254, "id": "3A-8" },
    { "name": "Sherasiya Shyam Sureshbhai", "enrollment_no": "24010101258", "roll_no": 255, "id": "3A-8" },
    { "name": "Liya Hirvita Rajendra", "enrollment_no": "24010101157", "roll_no": 256, "id": "3A-8" },
    { "name": "Ahir Krishna Manishbhai", "enrollment_no": "24010101003", "roll_no": 257, "id": "3A-8" },
    { "name": "Parmar Devanshu Gopalbhai", "enrollment_no": "24010101206", "roll_no": 258, "id": "3A-8" },
    { "name": "Tivari Astha Sureshbhai", "enrollment_no": "24010101283", "roll_no": 259, "id": "3A-8" },
    { "name": "Pal Kana Odedra", "enrollment_no": "24010101191", "roll_no": 260, "id": "3A-8" },
    { "name": "Sorathiya Nabhag Sanjaybhai", "enrollment_no": "24010101275", "roll_no": 261, "id": "3A-9" },
    { "name": "Chauhan Vishal Girishbhai", "enrollment_no": "24010101042", "roll_no": 262, "id": "3A-9" },
    { "name": "Kuchhadiya Vanita Bhima", "enrollment_no": "24010101150", "roll_no": 263, "id": "3A-9" },
    { "name": "Bhimani Naman Chiragbhai", "enrollment_no": "24010101025", "roll_no": 264, "id": "3A-9" },
    { "name": "Diyora Miraj Bhaveshbhai", "enrollment_no": "24010101064", "roll_no": 265, "id": "3A-9" },
    { "name": "Gajera Rakshit Ketanbhai", "enrollment_no": "24010101071", "roll_no": 266, "id": "3A-9" },
    { "name": "Parmar Darpan Jitendra", "enrollment_no": "24010101205", "roll_no": 267, "id": "3A-9" },
    { "name": "Trivedi Manan Vijaykumar", "enrollment_no": "24010101285", "roll_no": 268, "id": "3A-9" },
    { "name": "Dave Maharshi Kirtikumar", "enrollment_no": "24010101055", "roll_no": 269, "id": "3A-9" },
    { "name": "Param Rameshbhai Kotadiya", "enrollment_no": "24010101148", "roll_no": 270, "id": "3A-9" },
    { "name": "Patel Archi Pradipbhai", "enrollment_no": "24010101213", "roll_no": 271, "id": "3A-9" },
    { "name": "Saradhara Yug Vrajbhushanbhai", "enrollment_no": "24010101250", "roll_no": 272, "id": "3A-9" },
    { "name": "Padhariya Ruturajsinh Sureshbhai", "enrollment_no": "24010101193", "roll_no": 273, "id": "3A-9" },
    { "name": "Vegad Jenil Ashokbhai", "enrollment_no": "24010101300", "roll_no": 274, "id": "3A-9" },
    { "name": "Patani Kismatbanu Shahidbhai", "enrollment_no": "24010101212", "roll_no": 275, "id": "3A-9" },
    { "name": "Savaliya Jinesh Kantilal", "enrollment_no": "24010101254", "roll_no": 276, "id": "3A-9" },
    { "name": "Tank Darshan Chetanbhai", "enrollment_no": "24010101277", "roll_no": 277, "id": "3A-9" },
    { "name": "Ghodasara Dev Ketanbhai", "enrollment_no": "24010101081", "roll_no": 278, "id": "3A-9" },
    { "name": "Pithadiya Yash Devendrabhai", "enrollment_no": "24010101221", "roll_no": 279, "id": "3A-9" },
    { "name": "Gohel Jenil Amitkumar", "enrollment_no": "24010101088", "roll_no": 280, "id": "3A-9" }
];
const arrB = [
    { "name": "Javiya Niíali Ramjibhai", "enrollment_no": "24010101110", "roll_no": 301, "id": "3B-1" },
    { "name": "Kothadia Jal Hiteshkumaí", "enrollment_no": "24010101149", "roll_no": 302, "id": "3B-1" },
    { "name": "Paímaí Bhavik Aíjanbhai", "enrollment_no": "24010101204", "roll_no": 303, "id": "3B-1" },
    { "name": "Ramani Manav Satishbhai", "enrollment_no": "24010101234", "roll_no": 304, "id": "3B-1" },
    { "name": "Rathod Paías Ravibhai", "enrollment_no": "24010101240", "roll_no": 305, "id": "3B-1" },
    { "name": "Chauhan Smit Hasmukhbhai", "enrollment_no": "24010101041", "roll_no": 306, "id": "3B-1" },
    { "name": "Lunagaíiya ľiíth Jayeshbhai", "enrollment_no": "24010101159", "roll_no": 307, "id": "3B-1" },
    { "name": "Bhatti Jiya Pankajbhai", "enrollment_no": "24010101023", "roll_no": 308, "id": "3B-1" },
    { "name": "Dhaduk Vandan Dipakbhai", "enrollment_no": "24010101060", "roll_no": 309, "id": "3B-1" },
    { "name": "Khoíajiya Mahií Mustufa", "enrollment_no": "24010101145", "roll_no": 310, "id": "3B-1" },
    { "name": "Dangaí Naimish Hasmukhbhai", "enrollment_no": "24010101049", "roll_no": 311, "id": "3B-1" },
    { "name": "Suíeja Víunda Sumitbhai", "enrollment_no": "24010101276", "roll_no": 312, "id": "3B-1" },
    { "name": "Manek Malay Rishibhai", "enrollment_no": "24010101164", "roll_no": 313, "id": "3B-1" },
    { "name": "Raiyani Vishva Nileshbhai", "enrollment_no": "24010101231", "roll_no": 314, "id": "3B-1" },
    { "name": "Santoki Sakshiben Devendíabhai", "enrollment_no": "24010101249", "roll_no": 315, "id": "3B-1" },
    { "name": "Solanki Naimisha Ganeshbhai", "enrollment_no": "24010101270", "roll_no": 316, "id": "3B-1" },
    { "name": "ľaíaviya Kíutagn Dilipkumaí", "enrollment_no": "24010101278", "roll_no": 317, "id": "3B-1" },
    { "name": "Bhatti Haídvi Rajendíabhai", "enrollment_no": "24010101022", "roll_no": 318, "id": "3B-1" },
    { "name": "Dobaíiya Rutvi Rasikbhai", "enrollment_no": "24010101067", "roll_no": 319, "id": "3B-1" },
    { "name": "Gohel Daíshan Kishoíbhai", "enrollment_no": "24010101087", "roll_no": 320, "id": "3B-1" },
    { "name": "Siddhpuía Víinda Nileshbhai", "enrollment_no": "24010101264", "roll_no": 321, "id": "3B-2" },
    { "name": "Somaiya Nihal Dipak", "enrollment_no": "24010101273", "roll_no": 322, "id": "3B-2" },
    { "name": "Vala Haísiddhiba Jayviísinh", "enrollment_no": "24010101293", "roll_no": 323, "id": "3B-2" },
    { "name": "Rankja Khushi Satishbhai", "enrollment_no": "24010101237", "roll_no": 324, "id": "3B-2" },
    { "name": "Shingala Jina Dilipbhai", "enrollment_no": "24010101262", "roll_no": 325, "id": "3B-2" },
    { "name": "Shingala Dhaímik Dhaímeshbhai", "enrollment_no": "24010101261", "roll_no": 326, "id": "3B-2" },
    { "name": "Paísana Shubham Paíeshbhai", "enrollment_no": "24010101210", "roll_no": 327, "id": "3B-2" },
    { "name": "Mendpaía Kíishaben Hasmukhbhai", "enrollment_no": "24010101179", "roll_no": 328, "id": "3B-2" },
    { "name": "Baíevadiya Devaísh Haíikíushnabhai", "enrollment_no": "24010101014", "roll_no": 329, "id": "3B-2" },
    { "name": "Gopani Mitsu Bhaíatbhai", "enrollment_no": "24010101093", "roll_no": 330, "id": "3B-2" },
    { "name": "Jamod Kashika Píavinbhai", "enrollment_no": "24010101109", "roll_no": 331, "id": "3B-2" },
    { "name": "Kalola Hill Kishoíbhai", "enrollment_no": "24010101120", "roll_no": 332, "id": "3B-2" },
    { "name": "Pipaliya Meet Bhaíatbhai", "enrollment_no": "24010101220", "roll_no": 333, "id": "3B-2" },
    { "name": "Sadhu Kuldeep Haíshadkumaí", "enrollment_no": "24010101243", "roll_no": 334, "id": "3B-2" },
    { "name": "Dhandha Aayushi Sanatbhai", "enrollment_no": "24010101063", "roll_no": 335, "id": "3B-2" },
    { "name": "Jadeja Riddhiba Jayendíasinh", "enrollment_no": "24010101105", "roll_no": 336, "id": "3B-2" },
    { "name": "Kanjaíiya Radhika Mukeshbhai", "enrollment_no": "24010101128", "roll_no": 337, "id": "3B-2" },
    { "name": "Joshi Vivek Bhaveshbhai", "enrollment_no": "24010101114", "roll_no": 338, "id": "3B-2" },
    { "name": "Dashadiya Yash Kishoíbhai", "enrollment_no": "24010101312", "roll_no": 339, "id": "3B-2" },
    { "name": "Kanzaíiya Kíunal Píavinbhai", "enrollment_no": "24010101130", "roll_no": 340, "id": "3B-2" },
    { "name": "Jodhani Dhíuvbhai Rajeshkumaí", "enrollment_no": "24010101111", "roll_no": 341, "id": "3B-3" },
    { "name": "Shivang Nandani", "enrollment_no": "24010101188", "roll_no": 342, "id": "3B-3" },
    { "name": "Rangani Aípit Dilipbhai", "enrollment_no": "24010101236", "roll_no": 343, "id": "3B-3" },
    { "name": "Ghodasaía Yashvi Dhiíajlal", "enrollment_no": "24010101082", "roll_no": 344, "id": "3B-3" },
    { "name": "Rakhasiya Nikhil Hasmukhbhai", "enrollment_no": "24010101233", "roll_no": 345, "id": "3B-3" },
    { "name": "Dhamsaniya Píincyben Ashokbhai", "enrollment_no": "24010101062", "roll_no": 346, "id": "3B-3" },
    { "name": "ľiíth Gamaía", "enrollment_no": "24010101073", "roll_no": 347, "id": "3B-3" },
    { "name": "Mahek Patel", "enrollment_no": "24010101216", "roll_no": 348, "id": "3B-3" },
    { "name": "Kasundía Píakíuti Sanjaybhai", "enrollment_no": "24010101136", "roll_no": 349, "id": "3B-3" },
    { "name": "Kacha Paíam Sanjay", "enrollment_no": "24010101115", "roll_no": 350, "id": "3B-3" },
    { "name": "Soíathiya Mann Ashvinbhai", "enrollment_no": "24010101274", "roll_no": 351, "id": "3B-3" },
    { "name": "Vansajaliya Ankit Hemantbhai", "enrollment_no": "24010101295", "roll_no": 352, "id": "3B-3" },
    { "name": "Fultaíiya om", "enrollment_no": "24010101070", "roll_no": 353, "id": "3B-3" },
    { "name": "Manvaí Hemil Rakeshbhai", "enrollment_no": "24010101167", "roll_no": 354, "id": "3B-3" },
    { "name": "Detíoja Ujjwal Naíendíabhai", "enrollment_no": "24010101059", "roll_no": 355, "id": "3B-3" },
    { "name": "Hinsu Víaj Devjibhai", "enrollment_no": "24010101100", "roll_no": 356, "id": "3B-3" },
    { "name": "Vala Píashantkumaí Maheshbhai", "enrollment_no": "24010101294", "roll_no": 357, "id": "3B-3" },
    { "name": "Jadeja Manvendíasinh Jaydeepsinh", "enrollment_no": "24010101104", "roll_no": 358, "id": "3B-3" },
    { "name": "Meghani Rishita Naíendíabhai", "enrollment_no": "24010101171", "roll_no": 359, "id": "3B-3" },
    { "name": "Hiíani ľulsiben Rohitbhai", "enrollment_no": "24010101102", "roll_no": 360, "id": "3B-3" },
    { "name": "Makwana Shíaddha Shaileshbhai", "enrollment_no": "24010101161", "roll_no": 361, "id": "3B-4" },
    { "name": "Bhalala Het Lalitbhai", "enrollment_no": "24010101019", "roll_no": 362, "id": "3B-4" },
    { "name": "Chotaliya Jenish Ashokbhai", "enrollment_no": "24010101047", "roll_no": 363, "id": "3B-4" },
    { "name": "Detíoja Shaíadkumaí Dilipbhai", "enrollment_no": "24010101058", "roll_no": 364, "id": "3B-4" },
    { "name": "Kaídani Píince Vipulbhai", "enrollment_no": "24010101133", "roll_no": 365, "id": "3B-4" },
    { "name": "Ughíeja Dax Ashokbhai", "enrollment_no": "24010101286", "roll_no": 366, "id": "3B-4" },
    { "name": "Khambhala ľaíkesh Vallabhbhai", "enrollment_no": "24010101141", "roll_no": 367, "id": "3B-4" },
    { "name": "Sodha Kashwiniba Lakhansinh", "enrollment_no": "24010101268", "roll_no": 368, "id": "3B-4" },
    { "name": "Vachhani Janvi Avinashbhai", "enrollment_no": "24010101289", "roll_no": 369, "id": "3B-4" },
    { "name": "Dave Hetvi Gopalbhai", "enrollment_no": "24010101052", "roll_no": 370, "id": "3B-4" },
    { "name": "Padia Haísh Jitendíabhai", "enrollment_no": "24010101194", "roll_no": 371, "id": "3B-4" },
    { "name": "Umíetiya Kush Bhaíatbhai", "enrollment_no": "24010101287", "roll_no": 372, "id": "3B-4" },
    { "name": "Khokhaí Dhíuvi Govind", "enrollment_no": "24010101144", "roll_no": 373, "id": "3B-4" },
    { "name": "Paímaí Aniíudhdha Govindbhai", "enrollment_no": "24010101203", "roll_no": 374, "id": "3B-4" },
    { "name": "Bhimani Jeel Yogeshbhai", "enrollment_no": "24010101024", "roll_no": 375, "id": "3B-4" },
    { "name": "Patel Neel Sanjaykumaí", "enrollment_no": "24010101217", "roll_no": 376, "id": "3B-4" },
    { "name": "Mehta Sneha Ashvinbhai", "enrollment_no": "24010101175", "roll_no": 377, "id": "3B-4" },
    { "name": "Paíekh Bhaígav Sanjaybhai", "enrollment_no": "24010101202", "roll_no": 378, "id": "3B-4" },
    { "name": "Sakaíiya Mihií Kishoíbhai", "enrollment_no": "24010101245", "roll_no": 379, "id": "3B-4" },
    { "name": "Gondaliya Shíijal Jayeshkumaí", "enrollment_no": "24010101092", "roll_no": 380, "id": "3B-4" },
    { "name": "Makvana Rutvik Kalpeshbhai", "enrollment_no": "24010101160", "roll_no": 381, "id": "3B-5" },
    { "name": "Dodiya Riya Daíshanbhai", "enrollment_no": "24010101068", "roll_no": 382, "id": "3B-5" },
    { "name": "Limbasiya Deep Paíeshbhai", "enrollment_no": "24010101156", "roll_no": 383, "id": "3B-5" },
    { "name": "Paímaí Dhíuvi Naíeshbhai", "enrollment_no": "24010101207", "roll_no": 384, "id": "3B-5" },
    { "name": "Vishva ľhesiya", "enrollment_no": "24010101281", "roll_no": 385, "id": "3B-5" },
    { "name": "Dave Dhíuv Yogeshkumaí", "enrollment_no": "24010101051", "roll_no": 386, "id": "3B-5" },
    { "name": "Lakkad Devisbhai Aívindbhai", "enrollment_no": "24010101154", "roll_no": 387, "id": "3B-5" },
    { "name": "Dalsaniya Yashvi Jayeshkumaí", "enrollment_no": "24010101048", "roll_no": 388, "id": "3B-5" },
    { "name": "Bhuva Shivam Ashwinbhai", "enrollment_no": "24010101029", "roll_no": 389, "id": "3B-5" },
    { "name": "Malaviya Mitul Mukeshbhai", "enrollment_no": "24010101162", "roll_no": 390, "id": "3B-5" },
    { "name": "Solanki Aíyan Valjibhai", "enrollment_no": "24010101269", "roll_no": 391, "id": "3B-5" },
    { "name": "Voía Rudía Giíishbhai", "enrollment_no": "24010101305", "roll_no": 392, "id": "3B-5" },
    { "name": "Solanki Vishal Rameshbhai", "enrollment_no": "24010101272", "roll_no": 393, "id": "3B-5" },
    { "name": "Vyas Jinal Amitbhai", "enrollment_no": "24010101306", "roll_no": 394, "id": "3B-5" },
    { "name": "Savaliya ľiíth Navnitbhai", "enrollment_no": "24010101256", "roll_no": 395, "id": "3B-5" },
    { "name": "Vasani Daksh Nikhilkumaí", "enrollment_no": "24010101297", "roll_no": 396, "id": "3B-5" },
    { "name": "Kantesaíia Paíi Romalbhai", "enrollment_no": "24010101129", "roll_no": 397, "id": "3B-5" },
    { "name": "Baíaiya Yash Nileshbhai", "enrollment_no": "24010101012", "roll_no": 398, "id": "3B-5" },
    { "name": "Goswami Rudía Nileshgaí", "enrollment_no": "24010101094", "roll_no": 399, "id": "3B-5" },
    { "name": "Ladani Mann Snehalbhai", "enrollment_no": "24010101152", "roll_no": 400, "id": "3B-5" },
    { "name": "Paímaí Uday Jagdishbhai", "enrollment_no": "24010101209", "roll_no": 401, "id": "3B-6" },
    { "name": "Paísaniya Dhíuvkumaí Jayendíabhai", "enrollment_no": "24010101211", "roll_no": 402, "id": "3B-6" },
    { "name": "Vagh Dhavalbhai Naíeshbhai", "enrollment_no": "24010101291", "roll_no": 403, "id": "3B-6" },
    { "name": "Ghoniya Víunda Dilipbhai", "enrollment_no": "24010101083", "roll_no": 404, "id": "3B-6" },
    { "name": "Sankhavaía Píayag Mansukhlal", "enrollment_no": "24010101248", "roll_no": 405, "id": "3B-6" },
    { "name": "Gohel Kuldeep Kishoíbhai", "enrollment_no": "24010101089", "roll_no": 406, "id": "3B-6" },
    { "name": "Bhoíaniya Píiya Suíeshbhai", "enrollment_no": "24010101027", "roll_no": 407, "id": "3B-6" },
    { "name": "Bajadiya Om Bhupatbhai", "enrollment_no": "24010101011", "roll_no": 408, "id": "3B-6" },
    { "name": "Ghaídeshiya Man Ashokbhai", "enrollment_no": "24010101079", "roll_no": 409, "id": "3B-6" },
    { "name": "Haíkhani Ronak Píafulbhai", "enrollment_no": "24010101096", "roll_no": 410, "id": "3B-6" },
    { "name": "Aíyansinh Lalakia", "enrollment_no": "24010101155", "roll_no": 411, "id": "3B-6" },
    { "name": "Mendapaía Utpal Shaileshbhai", "enrollment_no": "24010101178", "roll_no": 412, "id": "3B-6" },
    { "name": "Bechía Diya Jayesh", "enrollment_no": "24010101016", "roll_no": 413, "id": "3B-6" },
    { "name": "Mathakiya Navfal Kutbudin", "enrollment_no": "24010101170", "roll_no": 414, "id": "3B-6" },
    { "name": "Kamaliya Manaliben Dineshbhai", "enrollment_no": "24010101122", "roll_no": 415, "id": "3B-6" },
    { "name": "Vagheía Vaidika Hinaben", "enrollment_no": "24010101292", "roll_no": 416, "id": "3B-6" },
    { "name": "Dave Kíisha Satyakam", "enrollment_no": "24010101054", "roll_no": 417, "id": "3B-6" },
    { "name": "Maíkana Nisaíg Maheshbhai", "enrollment_no": "24010101168", "roll_no": 418, "id": "3B-6" },
    { "name": "Bagda Sandipkumaí Danabhai", "enrollment_no": "24010101010", "roll_no": 419, "id": "3B-6" },
    { "name": "Voía Píeet Chetankumaí", "enrollment_no": "24010101304", "roll_no": 420, "id": "3B-6" },
    { "name": "Dhamsaniya Dhvani Kishoíbhai", "enrollment_no": "24010101061", "roll_no": 421, "id": "3B-7" },
    { "name": "Mungaía Meet Vithalbhai", "enrollment_no": "24010101185", "roll_no": 422, "id": "3B-7" },
    { "name": "Hinsu Maitíi Dipakbhai", "enrollment_no": "24010101098", "roll_no": 423, "id": "3B-7" },
    { "name": "Mehta Vatsal Yogeshkumaí", "enrollment_no": "24010101176", "roll_no": 424, "id": "3B-7" },
    { "name": "Chadamiya Bhavy Babulal", "enrollment_no": "24010101902", "roll_no": 425, "id": "3B-7" },
    { "name": "Bavaliya ľushaí Píavinbhai", "enrollment_no": "24010101015", "roll_no": 426, "id": "3B-7" },
    { "name": "Kotadia Richa Cheíitkumaí", "enrollment_no": "24010101147", "roll_no": 427, "id": "3B-7" },
    { "name": "Chauhan Kíutaíth Rajubhai", "enrollment_no": "24010101040", "roll_no": 428, "id": "3B-7" },
    { "name": "Sheth Haísh Ketanbhai", "enrollment_no": "24010101259", "roll_no": 429, "id": "3B-7" }
];

let arr = [];
let rows = [];
let currentIndex = 0;
const present_rolls = [];
const absent_rolls = [];

const groupList = document.getElementById('groupList');
const scrollDiv = document.getElementById("scrollable-div");
const titleDiv = document.querySelector('.page-title');

groupList.addEventListener("click", (e) => {
    if (e.target.classList.contains('gA')) {
        arr = arrA;
        renderList(arr);
    } else if (e.target.classList.contains('gB')) {
        arr = arrB;
        renderList(arr);
    }
});

//=------------------------------------------------------------------------------------------------------
// Function to render the list on page 
//------------------------------------

function renderList(arr) {
    const defaultMessage = document.getElementById('defaultMessage');
    if (defaultMessage) defaultMessage.style.display = 'none';

    const tbody = document.getElementById('studentTableBody');
    const template = document.getElementById('studentRowTemplate');

    tbody.innerHTML = ''; 
    
    const fragment = new DocumentFragment();

    arr.forEach((student, index) => {
        const clone = template.content.cloneNode(true);
        const tr = clone.querySelector("tr");

        tr.querySelector('.rollno').textContent = student.roll_no;
        tr.querySelector('.name').textContent = student.name;
        tr.querySelector('.enrollment').textContent = student.enrollment_no;
        tr.querySelector('.id').textContent = student.id;

        tr.classList.remove("row-animate");
        void tr.offsetWidth; 
        tr.classList.add("row-animate");
        tr.style.animationDelay = `${index * 40}ms`;

        fragment.appendChild(clone);
    });
    tbody.appendChild(fragment);

    rows = document.querySelectorAll("tbody tr");
    currentIndex = 0;
    if (rows.length) rows[0].focus();
}


//=-----------------------------------------------------------------------------------------------------
//  Click events for Present/Absent buttons
//-----------------------------------------

document.addEventListener("click", (e) => {
    if (!e.target.closest("tr")) return;

    const row = e.target.closest("tr");
    row.focus();

    if (e.target.classList.contains('present-btn')) {
        markPresent(row);
    } else if (e.target.classList.contains('absent-btn')) {
        markAbsent(row);
    }
});

//=-----------------------------------------------------------------------------------------------------

function markPresent(row) {
    const roll = row.querySelector(".rollno").textContent;
    const presentBtn = row.querySelector('.present-btn');
    const absentBtn = row.querySelector('.absent-btn');

    const index = absent_rolls.indexOf(roll);
    if (index !== -1) absent_rolls.splice(index, 1);

    if (!present_rolls.includes(roll)) present_rolls.push(roll);

    row.style.backgroundColor = '#73BA9B';
    presentBtn.style.backgroundColor = '#26734d';
    absentBtn.style.backgroundColor = '#a6a1a1';
}

function markAbsent(row) {
    const roll = row.querySelector(".rollno").textContent;
    const presentBtn = row.querySelector('.present-btn');
    const absentBtn = row.querySelector('.absent-btn');

    const index = present_rolls.indexOf(roll);
    if (index !== -1) present_rolls.splice(index, 1);

    if (!absent_rolls.includes(roll)) absent_rolls.push(roll);

    row.style.backgroundColor = '#cf8b7a';
    absentBtn.style.backgroundColor = '#a84b3e';
    presentBtn.style.backgroundColor = '#a6a1a1';
}

//=-----------------------------------------------------------------------------------------------------
// Keyboard Scroll + Input Keys (↑ ↓ Enter Backspace)
//-----------------------------------------------

scrollDiv.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
    }

    if (!rows.length) return;

    if (e.key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % rows.length;
        rows[currentIndex].focus();
    } else if (e.key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + rows.length) % rows.length;
        rows[currentIndex].focus();
    } else if (e.key === 'Enter') {
        markPresent(rows[currentIndex]);
        currentIndex = (currentIndex + 1) % rows.length;
        rows[currentIndex].focus();
    } else if (e.key === 'Backspace') {
        markAbsent(rows[currentIndex]);
        currentIndex = (currentIndex + 1) % rows.length;
        rows[currentIndex].focus();
    }
});

//------------------------------------------------------------------------------------------------------
// Title Button Controls (All Present, All Absent, Reset, Save)
// --------------------------------------

titleDiv.addEventListener("click", (e) => {
    if (!rows.length) return;

    if (e.target.classList.contains('allPr')) {
        present_rolls.length = 0;
        absent_rolls.length = 0;
        rows.forEach(row => markPresent(row));
    }
    else if (e.target.classList.contains('allAb')) {
        present_rolls.length = 0;
        absent_rolls.length = 0;
        rows.forEach(row => markAbsent(row));
    }
    else if (e.target.classList.contains('reset')) {
        present_rolls.length = 0;
        absent_rolls.length = 0;

        rows.forEach(row => {
            row.style.backgroundColor = '';
            row.querySelector('.present-btn').style.backgroundColor = '';
            row.querySelector('.absent-btn').style.backgroundColor = '';
        });
    }
    else if (e.target.classList.contains('save')) {
        console.log("Present:", present_rolls);
        console.log("Absent:", absent_rolls);
        alert("Saved in console!");
    }
});
