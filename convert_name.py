
def convert_name(string): 
    new_string = ''
    for i in range (1,3):
        new_string += string[i].upper()
    for i in range (3,5):
        new_string += string[i]
    new_string += '_F'
    for i in range (6,7):
        new_string += string[i]
    return new_string

